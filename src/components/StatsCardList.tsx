import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelection'
import { useActions } from '../hooks/useActions'
import { Card, Statistic, Typography } from 'antd'
import StatsCardItem from './StatsCardItem'
import { SCard } from '../pages/About'

const StatsCardList: React.FC = () => {
  const { fetchWakaLangs, fetchWakaCode } = useActions()
  const stats = useTypedSelector((state) => state.fetchWakaLang)
  const codeActivity = useTypedSelector((state) => state.fetchWakaCode)

  useEffect(() => {
    if (stats.data.length === 0 && !codeActivity.data) {
      fetchWakaLangs()
      fetchWakaCode()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const StatsActions = [
    <Statistic
      title="Total hour"
      value={codeActivity.data?.grand_total.human_readable_total}
      loading={codeActivity.loading}
      valueRender={(v) => <Typography className='text-small md:text-base'>{v}</Typography>}
    />,
    <Statistic
      className="text-sm"
      title="Best Avg."
      value={codeActivity.data?.best_day.text}
      loading={codeActivity.loading}
      valueRender={(v) => <Typography className='text-small md:text-base'>{v}</Typography>}
    />,
    <Statistic
      className="text-sm"
      title="Days"
      value={codeActivity.data?.range.days_including_holidays}
      loading={codeActivity.loading}
      valueRender={(v) => <Typography className='text-small md:text-base'>{v}</Typography>}
    />,
  ]

  return (
    <SCard
      type="inner"
      loading={stats.loading}
      className="backdrop-blur-sm bg-[#141414]/30"
      title={<Typography className="text-xl">My Statistic</Typography>}
      actions={StatsActions}
    >
      {stats.data.map((stat, i) => {
        if (i < 6) {
          return (
            <Card.Grid hoverable key={stat.name} className='!w-full md:!w-1/2 lg:!w-1/3'>
              <StatsCardItem data={stat} />
            </Card.Grid>
          )
        }
      })}
    </SCard>
  )
}

export default StatsCardList

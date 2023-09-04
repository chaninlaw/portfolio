import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelection'
import { useActions } from '../hooks/useActions'
import { Card, Statistic, Typography } from 'antd'
import StatsCardItem from './StatsCardItem'

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
    />,
    <Statistic
      title="Best Avg."
      value={codeActivity.data?.best_day.text}
      loading={codeActivity.loading}
    />,
    <Statistic
      title="Days"
      value={codeActivity.data?.range.days_including_holidays}
      loading={codeActivity.loading}
    />,
  ]

  return (
    <Card
      type="inner"
      bordered={false}
      loading={stats.loading}
      className="backdrop-blur-sm bg-[#141414]/80"
      title={<Typography.Title level={3}>My Statistic</Typography.Title>}
      actions={StatsActions}
    >
      {stats.data.map((stat, i) => {
        if (i < 6) {
          return (
            <Card.Grid className="border-none shadow-none" key={stat.name}>
              <StatsCardItem data={stat} />
            </Card.Grid>
          )
        }
      })}
    </Card>
  )
}

export default StatsCardList

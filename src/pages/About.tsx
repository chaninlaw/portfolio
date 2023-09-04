import React, { useEffect } from 'react'
import {
  Card,
  Col,
  Progress,
  Row,
  Skeleton,
  Statistic,
  Timeline,
  Typography,
} from 'antd'
import { mySkills, timelineItems } from '../constants'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelection'

interface Props {}

const AboutPage: React.FC<Props> = () => {
  const { fetchWakaCode, fetchWakaLangs } = useActions()
  const stats = useTypedSelector((state) => state.fetchWakaLang)
  const codeActivity = useTypedSelector((state) => state.fetchWakaCode)

  useEffect(() => {
    if (stats.data.length === 0 && !codeActivity.data) {
      fetchWakaLangs()
      fetchWakaCode()
      console.log(import.meta.env.VITE_WAKATIME_LANGUAGES_API, import.meta.env.VITE_WAKATIME_CODE_API)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="mx-20">
      <Col xs={12} sm={12}>
        <Timeline className="mr-80" mode="left" items={timelineItems} />
      </Col>
      <Col xs={12} sm={12} className="space-y-10">
        <Card
          type="inner"
          className='backdrop-blur-sm bg-[#141414]/80'
          title={<Typography.Title level={3}>My Skills</Typography.Title>}
          bordered={false}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Row align="middle">
            {mySkills.map(({ label, icon }) => {
              return (
                <Col className="flex flex-col items-center pb-4" key={label} xs={4} sm={4}>
                  {icon}
                  {label}
                </Col>
              )
            })}
          </Row>
        </Card>
        <Card
          type="inner"
          className='backdrop-blur-sm bg-[#141414]/80'
          title={<Typography.Title level={3}>My Statistic</Typography.Title>}
          bordered={false}
          actions={[
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
          ]}
        >
          <Row align="middle">
            <Skeleton loading={stats.loading}>
              {stats.data.map((stat, i) => {
                if (i < 5) {
                  return (
                    <Card.Grid key={stat.name} className='border-none shadow-none'>
                      <Statistic
                        title={stat.name}
                        value={stat.text}
                        loading={stats.loading}
                      />
                      <Progress
                        strokeColor={stat.color}
                        percent={Math.round(stat.percent)}
                        status="active"
                      />
                    </Card.Grid>
                  )
                }
              })}
            </Skeleton>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default AboutPage

import { Card, Col, Row, Timeline, Typography } from 'antd'
import { timelineItems } from '../constants'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useTypedSelector } from '../hooks/useTypedSelection'
import SkillsIconList from '../components/SkillsIconList'
import StatsCardList from '../components/StatsCardList'

interface Props {}

const AboutPage: React.FC<Props> = () => {

  return (
    <Row className="mx-20">
      <Col xs={12} sm={12}>
        <Timeline className="mr-80" mode="left" items={timelineItems} />
      </Col>
      <Col xs={12} sm={12} className="space-y-10">
        <Card
          type="inner"
          bordered={false}
          className="backdrop-blur-sm bg-[#141414]/80"
          title={<Typography.Title level={3} className='mb-0'>My Skills</Typography.Title>}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <SkillsIconList />
        </Card>
        <StatsCardList />
      </Col>
    </Row>
  )
}

export default AboutPage

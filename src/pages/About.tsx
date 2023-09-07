import { Card, Col, Row, Timeline, Typography } from 'antd'
import { timelineItems } from '../constants'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import SkillsIconList from '../components/SkillsIconList'
import StatsCardList from '../components/StatsCardList'
import DotAnimation from '../components/DotAnimation'

interface Props {}

const AboutPage: React.FC<Props> = () => {
  return (
    <Row className="mx-20">
      <Col xs={24} sm={8}>
        <Timeline
          mode="left"
          pending={'Roadmap...'}
          pendingDot={<DotAnimation />}
          items={timelineItems}
        />
      </Col>
      <Col sm={3}></Col>
      <Col xs={24} sm={12} className="space-y-10">
        <Card
          type="inner"
          className="backdrop-blur-sm bg-[#141414]/30"
          title={<Typography className="text-xl">My Skills</Typography>}
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

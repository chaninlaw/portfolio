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
import styled from 'styled-components'

export const SCard = styled(Card)`
  --tw-backdrop-blur: blur(4px);
  & .ant-card-actions {
    background-color: rgb(20 20 20 / 0.05);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
      var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
      var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
      var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
      var(--tw-backdrop-sepia);
  }
`

interface Props {}

const AboutPage: React.FC<Props> = () => {
  return (
    <Row className="mx-4 md:mx-20">
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
        <SCard
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
        </SCard>
        <StatsCardList />
      </Col>
    </Row>
  )
}

export default AboutPage

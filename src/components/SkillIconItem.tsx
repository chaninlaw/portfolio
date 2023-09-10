import { Col } from 'antd'
import React from 'react'

interface Props {
  icon: JSX.Element
  label: string
}
const SkillIconItem: React.FC<Props> = ({ icon, label }) => {
  return (
    <Col className="flex flex-col items-center py-2" key={label} xs={12} sm={4}>
      {icon}
      {label}
    </Col>
  )
}

export default SkillIconItem

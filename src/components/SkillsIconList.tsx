import React from 'react'
import { Row } from 'antd'
import { mySkills } from '../constants'
import SkillIconItem from './SkillIconItem'

const SkillsIconList: React.FC = () => {
  return (
    <Row align="middle">
      {mySkills.map(({ label, icon }) => {
        return <SkillIconItem key={label} label={label} icon={icon} />
      })}
    </Row>
  )
}

export default SkillsIconList

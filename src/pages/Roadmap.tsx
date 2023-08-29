import React from 'react'
import { Typography, theme } from 'antd'

interface Props {}

const RoadmapPage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return <Typography color={colorTextLightSolid}>labs</Typography>
}

export default RoadmapPage

import React from 'react'
import { Typography, theme } from 'antd'

interface Props {}

const HomePage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return <Typography color={colorTextLightSolid}>home</Typography>
}

export default HomePage
import React from 'react'
import { Typography, theme } from 'antd'

interface Props {}

const AboutPage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return (
    <>
      <Typography color={colorTextLightSolid}>about me</Typography>
    </>
  )
}

export default AboutPage

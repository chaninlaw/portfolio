import React from 'react'
import { Row, Typography, Col, theme } from 'antd'

interface Props {}

const HomePage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return (
    <Row>
      <Col xs={24} sm={24}>
        <Typography className="text-9xl mt-20 ml-10" color={colorTextLightSolid}>
          HEY <br /> I'M NINJA
          <Typography className="text-3xl ml-2">frontend developer</Typography>
        </Typography>
      </Col>
    </Row>
  )
}

export default HomePage

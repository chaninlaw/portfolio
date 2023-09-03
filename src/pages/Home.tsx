import React from 'react'
import { Row, Typography, Col, theme, Space } from 'antd'
import LinkButton from '../components/LinkButton'
import TextTyping from '../components/TextTyping'

interface Props {}

const HomePage: React.FC<Props> = () => {
  const { colorTextLightSolid } = theme.useToken().token

  return (
    <Row className="mt-10 mx-20">
      <Col xs={12} sm={12}>
        <Typography className="font-EG text-9xl" color={colorTextLightSolid}>
          Hey, <br /> I'm <span className="text-emerald-400">Ninja</span>
          <Typography className="text-2xl ml-2">
            a web developer's journey <br />
            <TextTyping />
          </Typography>
        </Typography>
        <Space className="mt-10">
          <LinkButton to="/about">Explore me</LinkButton>
        </Space>
      </Col>
    </Row>
  )
}

export default HomePage

import React from 'react'
import { Row, Typography, Col, Space } from 'antd'
import LinkButton from '../components/LinkButton'
import TextTyping from '../components/TextTyping'

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <Row className="mx-10 mt-10 md:mx-20">
      <Col xs={24} sm={24}>
        <Typography className="font-EG text-6xl md:text-9xl">
          Hey, <br /> I'm <span className="text-emerald-400">Ninja</span>
          <Typography className="text-lg md:text-xl">
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

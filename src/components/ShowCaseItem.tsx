import {
  CodeOutlined,
  ExportOutlined,
  SolutionOutlined,
} from '@ant-design/icons'
import { Card, CardProps, Image } from 'antd'
import React from 'react'

interface Props {
  item: any
}

const ShowCaseItem: React.FC<Props> = ({ item }) => {
  const actions: CardProps['actions'] = [
    <a target="_blank" href={item.solutionLink}>
      Solution
      <SolutionOutlined className="ml-1" />
    </a>,
    <a target="_blank" href={item.liveLink}>
      Live
      <ExportOutlined className="ml-1" />
    </a>,
    <a target="_blank" href={item.codeLink}>
      Code
      <CodeOutlined className="ml-1" />
    </a>,
  ]

  return (
    <Card title={item.title} actions={actions}>
      <Card.Grid className="!w-full">
        <Image src={item.image.src} alt={item.image.alt} />
      </Card.Grid>
    </Card>
  )
}

export default ShowCaseItem

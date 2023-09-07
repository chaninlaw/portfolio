import { Button, Form, Input, Row } from 'antd'
import { Posts } from '../pages/Post'

interface Props {
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
}

const randomId = () => {
  return Math.random().toString(32).slice(2, 6)
}

const PostCreate: React.FC<Props> = ({ setPosts }) => {
  const onFinish = ({ title }: { title: string }) => {
    setPosts((prev) => [...prev, { id: randomId(), title, comments: [] }])
  }

  return (
    <Form onFinish={onFinish}>
      <Row>
        <Form.Item label="Title" name="title">
          <Input suffix={<Button htmlType="submit">Submit</Button>} />
        </Form.Item>
      </Row>
    </Form>
  )
}

export default PostCreate

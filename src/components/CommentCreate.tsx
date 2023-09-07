import { Button, Form, Input } from 'antd'
import { Posts } from '../pages/Post'

interface Props {
  postId: string
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
}

const CommentCreate: React.FC<Props> = ({ postId, setPosts }) => {
  const onFinish = ({ comment }: { comment: string }) => {
    setPosts((prev) => [
      ...prev,
      { id: 'test', title: 'test', comments: [{ postId, comment }] },
    ])
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="New Comment" name="comment">
        <Input />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  )
}

export default CommentCreate

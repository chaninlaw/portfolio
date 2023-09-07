import { useState } from 'react'
import PostCreate from '../components/PostCreate'
import PostList from '../components/PostList'
import { Card, Divider, Typography } from 'antd'

interface Props {}

export interface Comments {
  postId: string
  comment: string
}
export interface Posts {
  id: string
  title: string
  comments: Comments[]
}

const Post: React.FC<Props> = () => {
  const [posts, setPosts] = useState<Posts[]>([])

  return (
    <Card
      className="mx-20"
      title={<Typography className="text-3xl text-white">Blog Post</Typography>}
    >
      <PostCreate setPosts={setPosts} />
      <Divider />
      <PostList posts={posts} setPosts={setPosts} />
    </Card>
  )
}

export default Post

import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import { Posts } from '../pages/Post'
import { Card } from 'antd'

interface Props {
  posts: Posts[]
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
}

const PostList: React.FC<Props> = ({ posts, setPosts }) => {
  const renderedPost = Object.values(posts).map((post) => {
    return (
      <Card key={post.id}>
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} setPosts={setPosts} />
      </Card>
    )
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPost}
    </div>
  )
}

export default PostList

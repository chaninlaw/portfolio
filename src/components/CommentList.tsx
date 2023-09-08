import { Comments } from '../pages/Post'

interface Props {
  comments: Comments[]
}

const CommentList: React.FC<Props> = ({ comments }) => {
  const renderedPost = comments.map(({ postId, comment }) => {
    return <li key={postId}>{comment}</li>
  })

  return <ul>{renderedPost}</ul>
}

export default CommentList

import { GithubOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'

const ButtonGithub = () => {
  return (
    <Button
      href="http://www.github.com/chaninlaw"
      target="_blank"
      size="large"
      className="items-center hidden md:flex"
    >
      <GithubOutlined />
      <Typography className="ml-2">github.me</Typography>
    </Button>
  )
}

export default ButtonGithub

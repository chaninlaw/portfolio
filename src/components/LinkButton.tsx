import React from 'react'
import { Button, ButtonProps } from 'antd'
import { IconType } from 'react-icons'
import { Link, To } from 'react-router-dom'
import { SwapRightOutlined } from '@ant-design/icons'

interface Props {
  children: React.ReactNode
  to: To
  Icon?: IconType
  buttonProps?: ButtonProps
}

const LinkButton: React.FC<Props> = ({
  children,
  to,
  Icon = SwapRightOutlined,
  ...rest
}) => {
  return (
    <Button
      {...rest.buttonProps}
      size="large"
      className="flex items-center group"
    >
      <Link to={to}>
        {children}
        <Icon className="group-hover:transition-transform group-hover:ease-in-out group-hover:translate-x-2" />
      </Link>
    </Button>
  )
}

export default LinkButton

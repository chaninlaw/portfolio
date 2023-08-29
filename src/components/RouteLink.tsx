import { Typography } from 'antd'
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from 'antd/es/breadcrumb/Breadcrumb'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
interface Props {
  route: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>
}

const RouteLink: React.FC<Props> = ({ route }) => {
  const location = useLocation()
  const isActive = location.pathname === route.path
  
  if(isActive) {
    return <Typography className='select-none'>{route.title}</Typography>
  }
  
  return <Link to={`${route.path}`}>{route.title}</Link>
}

export default RouteLink

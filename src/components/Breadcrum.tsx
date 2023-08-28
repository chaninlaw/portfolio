import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
  items: BreadcrumbItemType[]
}

const Breadcrum: React.FC<Props> = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item) => {
        // const lastItem = index < items.length - 1
        return (
          <Breadcrumb.Item key={`breadcrumbs-${item.key}`}>
            {item.path && <Link to={item.path}>{item.title}</Link>}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default Breadcrum

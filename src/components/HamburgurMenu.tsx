import { Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { NavbarItem } from '../routers/breadcrum'

interface Props {}

const HamburgurMenu: React.FC<Props> = () => {
  const [current, setCurrent] = useState('home')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <Menu
      mode="horizontal"
      onClick={onClick}
      selectedKeys={[current]}
      items={NavbarItem}
      className='w-full rounded-xl'
    />
  )
}

export default HamburgurMenu

import { useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import { Layout, Breadcrumb } from 'antd'
import { MainBreadcrum } from './routers/breadcrum'
import RouteLink from './components/RouteLink'
import GalaxyCanvas from './components/GalaxyCanvas'

const { Header, Content, Footer } = Layout

function App() {
  const element = useRoutes(Routes)
  return (
    <Layout className='relative min-h-screen'>
      <Header className="bg-transparent mt-10 z-10">
        <Breadcrumb
          items={MainBreadcrum}
          separator={<div className="select-none">\</div>}
          itemRender={(route) => <RouteLink route={route} />}
        />
      </Header>
      <Content className=''>{element}</Content>
      <Footer className='text-right'>ninja ©2023 made with love</Footer>
      <GalaxyCanvas />
    </Layout>
  )
}

export default App

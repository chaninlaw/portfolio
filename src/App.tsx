import { useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import { Layout, Breadcrumb, theme } from 'antd'
import { MainBreadcrum } from './routers/breadcrum'
import RouteLink from './components/RouteLink'

const { Header, Content, Footer } = Layout

function App() {
  const element = useRoutes(Routes)
  const { colorBgBase } = theme.useToken().token

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: colorBgBase }} />
      <Content style={{ background: colorBgBase, padding: '0 50px' }}>
        <Breadcrumb
          items={MainBreadcrum}
          separator={<div className='select-none'>\</div>}
          itemRender={(route) => <RouteLink route={route} />}
        />
        {element}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ninjas' ©2023 made with love
      </Footer>
    </Layout>
  )
}

export default App

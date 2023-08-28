import { useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import { Layout, theme } from 'antd'
import Breadcrumb from './components/Breadcrum'
import { MainBreadcrum } from './routers/breadcrum'

const { Header, Content, Footer } = Layout

function App() {
  const element = useRoutes(Routes)
  const { colorBgBase } = theme.useToken().token

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: colorBgBase }} />
      <Content style={{ background: colorBgBase, padding: '0 50px' }}>
        <Breadcrumb items={MainBreadcrum} />
        {element}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ninjas' ©2023 made with love
      </Footer>
    </Layout>
  )
}

export default App

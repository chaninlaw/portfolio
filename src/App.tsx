import { useNavigate, useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import { Layout, Breadcrumb, Button, FloatButton } from 'antd'
import { MainBreadcrum } from './routers/breadcrum'
import RouteLink from './components/RouteLink'
// import GalaxyCanvas from './components/GalaxyCanvas'
import { GithubOutlined } from '@ant-design/icons'
import PaticlesCanvas from './components/PaticlesCanvas'

const { Header, Content, Footer } = Layout

function App() {
  const element = useRoutes(Routes)
  const navigate = useNavigate()

  const navigateToContact = () => {
    navigate('/about')
  }

  return (
    <Layout className="relative min-h-screen bg-transparent">
      <Header className="bg-transparent mt-10 z-10 flex justify-between">
        <Breadcrumb
          className="mb-20"
          items={MainBreadcrum}
          separator={<div className="select-none">\</div>}
          itemRender={(route) => <RouteLink route={route} />}
        />
        <a href="http://www.github.com/chaninlaw" target="_blank">
          <Button size="large" className="flex items-center">
            <GithubOutlined />
            github/chaninlaw
          </Button>
        </a>
      </Header>
      <Content>{element}</Content>
      <Footer className="text-right bg-transparent">
        ninja ©2023 made with love
      </Footer>
      <FloatButton
        shape="square"
        tooltip={'contact me'}
        onClick={navigateToContact}
      />
      {/* <GalaxyCanvas /> */}
      <PaticlesCanvas />
    </Layout>
  )
}

export default App

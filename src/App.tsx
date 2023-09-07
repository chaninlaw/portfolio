import { useNavigate, useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import { Layout, Breadcrumb, FloatButton } from 'antd'
import { MainBreadcrum } from './routers/breadcrum'
import RouteLink from './components/RouteLink'
import PaticlesCanvas from './components/PaticlesCanvas'
import ButtonGithub from './components/ButtonGithub'

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
        <ButtonGithub />
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
      <PaticlesCanvas />
    </Layout>
  )
}

export default App

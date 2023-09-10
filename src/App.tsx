import {
  App as AntdApp,
  Layout,
  FloatButton,
  Breadcrumb,
  ConfigProvider,
  theme,
} from 'antd'
import { useRoutes } from 'react-router-dom'
import { Routes } from './routers'
import PaticlesCanvas from './components/PaticlesCanvas'
import { MainBreadcrum } from './routers/breadcrum'
import RouteLink from './components/RouteLink'
import ButtonGithub from './components/ButtonGithub'
import { ConfigProviderProps } from 'antd/es/config-provider'
import { BgColorsOutlined } from '@ant-design/icons'
import { useThemeContext } from './hooks/useThemeContext'

const { Header, Content, Footer } = Layout

function App() {
  const element = useRoutes(Routes)
  const { isDarkMode, setIsDarkMode } = useThemeContext()

  const myTheme: ConfigProviderProps['theme'] = {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: { colorPrimary: '#34d399' },
    components: {
      Timeline: {
        tailWidth: 3,
      },
    },
  }
  const handleClick = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <AntdApp>
      <ConfigProvider theme={myTheme}>
        <Layout className="relative min-h-screen bg-transparent">
          <Header className="bg-transparent px-6 mt-10 w-full z-10 flex justify-between md:px-12">
            <Breadcrumb
              className="mb-20"
              items={MainBreadcrum}
              separator={<div className="select-none">\</div>}
              itemRender={(route) => <RouteLink route={route} />}
            />
            <ButtonGithub />
            {/* <div className="w-1/6 mr-1 md:w-1/2">
          <HamburgurMenu />
        </div> */}
          </Header>
          <Content>{element}</Content>
          <Footer className="pt-6 text-right bg-transparent">
            ninja ©2023 made with love
          </Footer>
          <FloatButton
            shape="square"
            icon={<BgColorsOutlined />}
            tooltip={'toggle theme'}
            onClick={handleClick}
          />
          <PaticlesCanvas isDarkMode={isDarkMode} />
        </Layout>
      </ConfigProvider>
    </AntdApp>
  )
}

export default App

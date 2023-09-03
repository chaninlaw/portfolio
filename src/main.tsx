import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/stores/index.ts'
import App from './App.tsx'
import { ConfigProviderProps } from 'antd/es/config-provider/index'

const root = createRoot(document.getElementById('root')!)

const myTheme: ConfigProviderProps['theme'] = {
  algorithm: theme.darkAlgorithm,
  token: { colorPrimary: '#34d399' },
  components: {
    Timeline: {
      tailWidth: 3
    }
  }
}

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={myTheme}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)

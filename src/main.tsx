import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/stores/index.ts'
import App from './App.tsx'
import { ThemeContextProvider } from './components/ThemeContextProvider.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.PROD ? '/portfolio/' : '/'}>
          <App />
        </BrowserRouter>
      </Provider>
      </ThemeContextProvider>
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importar internacionalizzcion
import { ConfigProvider } from 'antd';
import esEs from 'antd/locale/es_ES';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider locale={esEs}>
    <App />
    </ConfigProvider>
  </StrictMode>,
)

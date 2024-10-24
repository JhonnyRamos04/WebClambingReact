import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'mingcute_icon/font/Mingcute.css'
import './index.css'
import '@fontsource-variable/noto-sans';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

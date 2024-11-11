import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/noto-sans'
import 'mingcute_icon/font/Mingcute.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Teachers } from './pages/Teachers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not found</div>
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Coach',
    element: <Teachers />
  },
  {
    path: '/Question',
    element: <Home />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

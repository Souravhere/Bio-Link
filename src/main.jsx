import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBox } from 'framer-motion'
import Layout from './Layout.jsx'
import Servieces from './Servieces.jsx'
import Aboutus from './Aboutus.jsx'
import ContactUs from './ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <App /> },
      { path: 'services', element: <Servieces /> },
      { path: 'aboutus', element: <Aboutus /> },
      { path: 'contactus', element: <ContactUs /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

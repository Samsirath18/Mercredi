import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './component/Footer.css'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer/>
  </StrictMode>,
)

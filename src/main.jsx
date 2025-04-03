import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/Partials/NavBarStyle.css'
import Silde from './component/Partials/Silde.jsx'

import NavBar from './component/Partials/NavBar.jsx'
import  './component/Footer.css'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer/>
    <NavBar/>
    <Silde />
    <Footer/>
  </StrictMode>,
)

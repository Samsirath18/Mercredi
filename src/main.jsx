import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/Partials/NavBarStyle.css'
import Silde from './component/Partials/Silde.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './component/Partials/NavBar.jsx'
import  './component/Footer.css'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <NavBar/>
    <Silde />
    <Footer/>
  </StrictMode>,
)

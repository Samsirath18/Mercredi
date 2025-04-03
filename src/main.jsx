import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/Partials/NavBarStyle.css'

import NavBar from './component/Partials/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
  </StrictMode>,
)

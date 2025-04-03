import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Silde from './component/Partials/Silde'
// import './Slide.css'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Silde />
  </StrictMode>,
)

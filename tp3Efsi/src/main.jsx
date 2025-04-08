import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Soplon from './Soplon.jsx'
import BtnReinicioConsola from './BtnReinicioConsola.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Soplon />
    <BtnReinicioConsola />
  </StrictMode>,
)

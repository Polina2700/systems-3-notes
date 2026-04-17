import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode> It does not render any visible UI, but it activates additional checks and warnings for its descendants.
    <AppRouter />
  //</StrictMode>,
)

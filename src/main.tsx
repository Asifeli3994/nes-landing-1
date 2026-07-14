import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StopwatchPage from './pages/StopwatchPage.tsx'

const isStopwatchRoute = window.location.pathname.replace(/\/+$/, '') === '/cronometro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isStopwatchRoute ? <StopwatchPage /> : <App />}
  </StrictMode>,
)

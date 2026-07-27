import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'

const isPrivacyRoute = window.location.pathname.replace(/\/$/, '') === '/privacidad'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPrivacyRoute ? <PrivacyPage /> : <App />}
  </StrictMode>,
)

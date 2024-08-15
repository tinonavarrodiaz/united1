import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
import Page from './components/pages/Page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { FontLoader } from "./components/FontLoader"
import eruda from "eruda"
eruda.init()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FontLoader>
      <App />
    </FontLoader>
  </StrictMode>,
)

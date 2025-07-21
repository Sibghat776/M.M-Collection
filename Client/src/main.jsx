import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ModalProvider from "./ContextApi/ModalContext.jsx"
import { AuthProvider } from "./ContextApi/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider     >
    </AuthProvider>
  </BrowserRouter >
)

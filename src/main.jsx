import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartProvider from './Context/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
     <App />
    </CartProvider>
  </StrictMode>,
)

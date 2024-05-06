import './index.css'
import React from 'react'
import { router } from './App.tsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import CartProvider from "./context/CartContext.tsx"

import { Toaster } from 'react-hot-toast'
import { register } from 'swiper/element';

register();

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)

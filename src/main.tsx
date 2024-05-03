import './index.css'
import React from 'react'
import { router } from './App.tsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { register } from 'swiper/element';

register();

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

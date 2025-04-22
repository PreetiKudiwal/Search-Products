import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import ProductDetail from './components/ProductDetail'
import MainContext from '../Context/MainContext'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './Contact'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/shop/:slug?',
            element: <Shop />
          },
          {
            path: '/productDetail/:productId',
            element: <ProductDetail />
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          }
        ]
      }
    ]
  )
  return (
    <MainContext>
    <RouterProvider router={routes} />
    </MainContext>
  )
}

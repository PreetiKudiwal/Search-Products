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
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) 
          },
          {
            path: '/about',
            element: (
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            ) 
          },
          {
            path: '/contact',
            element: (
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            ) 
          },
          {
            path: '/shop/:slug?',
            element: (
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            )
          },
          {
            path: '/productDetail/:productId',
            element: (
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            )
          },
          {
            path: '/cart',
            element: (
              <ProtectedRoute> 
                <Cart />
              </ProtectedRoute>
            )
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'',
        element: <Dashboard />
      },
      {
        path:'report/',
        element: <Dashboard />
      },
      {
        path:'task/',
        element: <Dashboard />
      },
      {
        path:'account/',
        element: <Dashboard />
      },
      {
        path:'stock/',
        element: <Dashboard />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ErrorPage from './pages/ErrorPage';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

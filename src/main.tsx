import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.tsx'
import Team from './pages/Team.tsx'
import Application from './pages/Application.tsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
  },
  {
    path: "Contact/",
    element: <Contact/>,
  },
  {
    path: "Application/",
    element: <Application/>,
  },
  {
    path: "Team/",
    element: <Team/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

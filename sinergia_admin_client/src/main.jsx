import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './pages/Auth/LogIn.jsx'
import PrincipalPanel from './pages/PrincipalPanel/PrincipalPanel.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
// {
//   path: '/panel',
//   element: (
//     <ProtectedRoute>
//       <PrincipalPanel />
//     </ProtectedRoute>
//   )
// }

let router = createBrowserRouter([
  {
    path:'/',
    Component : LogIn ,
  },
  {
    path:'/panel',
    Component : PrincipalPanel
  }

])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './pages/Auth/LogIn.jsx'
import MainLayout from './layout/MainLayout.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Admin from './pages/Admin/Admin.jsx'
import Articles from './pages/sinergia/articles/Articles.jsx'
import CreateBlog from './pages/CreateBlog/CreateBlog.jsx'
import BarbersLayout from './layout/barbers/BarbersLayout.jsx'
import BarberAdmin from './pages/Barbers/BarberAdmin.jsx'
import BarberUsers from './pages/Barbers/BaberUsers/BarberUsers.jsx'
import SinergiaLayout from './layout/sinergia/SinergiaLayout.jsx'
import SinergiaAdmin from './pages/sinergia/SinergiaAdmin.jsx'
import ConfigSinergia from './pages/sinergia/Config/ConfigSinergia.jsx'
import Users from './pages/sinergia/users/Users.jsx'

let router = createBrowserRouter([
  {
    path:'/',
    Component : LogIn ,
  },
  {
    path:'/panel',
    element : <MainLayout />,
    children : [

      //panel
      {
      index: true, // /panel
      element: <Admin />
      },
      

      //panel/barber
      {
      path : 'barber', 
      element: <BarbersLayout />,
      children : [
        {
          index: true, // /panel/barber
          element: <BarberAdmin />
        },
        {
          path: 'users', // /panel/barber/users
          element: <BarberUsers />
        }
      ]},

      //panel/sinergia
      {
        path : 'sinergia',
        element : <SinergiaLayout />,
        children : [
          {
            index: true, // /panel/sinergia
            element: <SinergiaAdmin />
          },
          {
            path: 'articles', // /panel/sinergia/articulos
            element: <Articles />
          },
          {
            path : 'config',
            element : <ConfigSinergia />
          },
          {
            path: 'users', // /panel/sinergia/articulos
            element: <Users />
          },
        ]
      }

    ]
  },
 

])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
/*
  {
    path:'/createblog',
    element : <MainLayout>
      <CreateBlog />
    </MainLayout>
  },
*/
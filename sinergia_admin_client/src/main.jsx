import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './pages/Auth/LogIn.jsx'
import MainLayout from './layout/MainLayout.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Admin from './pages/Admin/Admin.jsx'
import AdminBlogs from './pages/Admin/AdminBlogs.jsx'
import CreateBlog from './pages/CreateBlog.jsx'

let router = createBrowserRouter([
  {
    path:'/',
    Component : LogIn ,
  },
  {
    path:'/panel',
    element : <MainLayout>
      <Admin />
    </MainLayout>
  },
  {
    path:'/panel/blogs',
    element : <MainLayout>
      <AdminBlogs />
    </MainLayout>
  },
  {
    path:'/createblog',
    element : <MainLayout>
      <CreateBlog />
    </MainLayout>
  }

])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

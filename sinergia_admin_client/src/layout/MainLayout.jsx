import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useAuth } from '../context/AuthContext.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { checkLogin } from '../api/service/Auth.js';

export default function MainLayout() {
  const {isLogin, logInProvider } = useAuth();
  const navigate = useNavigate()

  const checkSession = async() =>{
    const wasLoggedIn = await checkLogin(navigate)
    try {
      if (wasLoggedIn.request.status === 200) {
        logInProvider();
        return 
      }
    } catch (error) {
      navigate('/')
    }
  }


  useEffect(()=>{
    if (!isLogin) {
      checkSession()
    }

  },[])



  return (
    <div>
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
    </div>
  )
}

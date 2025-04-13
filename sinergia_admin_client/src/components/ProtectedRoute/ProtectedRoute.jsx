// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = document.cookie.includes('your_secure_cookie_name')

  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute
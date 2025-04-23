import { createContext, useContext, useEffect, useState } from 'react';
// Crear el contexto
const AuthContext = createContext();

// Componente proveedor
export const AuthProvider = ({ children }) => {
    const [isLogin,setIslogin] = useState(false)

    //hacer validacion al backend de que si tiene cooki, o mejor dicho enviar una peticion a /chek si no tiene cookie directamente lo patea si la tiene validar que sea correcta
    useEffect(()=>{

    },[])
    console.log('valor del auth provider ',  isLogin);
    const logInProvider = () => setIslogin(true)
    const logOutProvider = () => setIslogin(false)
    


    return (
      <AuthContext.Provider value={{isLogin, logInProvider, logOutProvider }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => useContext(AuthContext);
  
  
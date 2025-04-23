import { createContext, useContext, useState } from 'react';

/*
  - este hook   tiene provee un contexto
  - si es tru el valor se ejecuta un metodo que hace visible el contenido 
  - recibe elemento hijo que es el mensaje
  - 
*/
// Creamos el contexto
const AlertContext = createContext();

export default function AlertProvider({children}) {

    const [value,setValue] = useState(false)

    //metodos del hook
    const openAlert = () => setValue(true);
    const closeAlert = () => setValue(false);

  return (
    <AlertContext.Provider >
      {children}
    </AlertContext.Provider>
  )
}


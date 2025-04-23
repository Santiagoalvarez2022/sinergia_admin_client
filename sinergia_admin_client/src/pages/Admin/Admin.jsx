import React, { useState } from 'react'
import Menu from './Components/Menu'
import Statistics from './Components/Statistics.jsx'

export default function Admin() {
 
    const handlerSelected = () =>{}
    return (
    <div className='bg-white h-[100vh] overflow-auto flex flex-col items-center'>
      <Menu handlerSelected={handlerSelected} />
    </div>
  )
}

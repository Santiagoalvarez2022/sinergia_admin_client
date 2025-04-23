import React from 'react'
import logo from '../../assets/logos/logoPng.svg'

export default function Header() {
    const styleLogo = {
         backgroundImage : `url(${logo})`
     } 
 
 
   return (
     <div className='bg-principal flex items-center p-4 w-full'>
 
       <div style={styleLogo} className={` bg-center bg-no-repeat bg-contain h-[7vh] w-[7vh] mr-2`} ></div>
       <div className='mr-4'>
           <span className='font-medium text-white'>Sinerg</span>
             <span className='text-[#1CFBA6]'>IA</span>
       </div>
       <h3 className='text-white'>Panel de administración</h3>
     </div>)
}
 
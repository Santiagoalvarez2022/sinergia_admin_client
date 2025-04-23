import React from 'react'
import Statistics from './Components/Statistics'
import ListItems from './Components/ListItems'



 
export default function AdminBlogs() {
  return (
   <div className=' pb-10  bg-bg min-h-screen px-6'>
 
        <h3 className='text-2xl md:text-4xl text-center py-6 font-bold text-principal tedow'>Articulos </h3>

        
        <div className='  flex flex-col lg:grid lg:grid-cols-[70%_30%]  gap-5  items-center lg:items-start '>
            <Statistics className='lg:order-2' />
            <ListItems  className='lg:order-1'/>
        </div>
              
      
   </div>
  )
}

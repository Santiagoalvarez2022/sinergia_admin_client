import React from 'react'
import { Link } from 'react-router-dom'

function ButtonMenu({item,handlerSelected}) {
  return (
    <div onClick={()=>handlerSelected(item)} className='bg-[#EEEEEE] rounded-xl px-8  py-4 text-center w-[50%] shadow-md shadow-[#000]/35 cursor-pointer '>
      <Link to={item.Link}>
        <p className='text-greenSinergia '>{item.title}</p>
      </Link>
    </div>
  )
}



export default function Menu({handlerSelected}) {

    const menus = [
      {title : 'Usarios', Link : '/panel'},
      {title : 'Artículos', Link : '/panel/blogs'},
      {title : 'Estadisticas', Link : '/panel'},

    ]

  return (
    <div className='w-full mt-[15vh] flex flex-col items-center gap-4 md:flex-row md:w-[70%] md:justify-center'>
        {
            menus.map((item,index)=>{
                return <ButtonMenu handlerSelected={handlerSelected} key={index} item={item} />
            })
        }
    </div>
  )
}
 
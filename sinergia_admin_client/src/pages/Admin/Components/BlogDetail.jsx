import React, { useEffect, useState } from 'react'
import { getBlogs, updateStateBlog } from '../../../api/service/Blogs';

export default function BlogDetail({blog, closeModal, handlerLoader}) {
    const {image,text, id} = blog.data;
    const {approved, author, date, title} = blog.data_show;
    const [succes,setSucces] = useState(false)
    const [error,setError] = useState(false)

    const changeState = async(approved) =>{
        handlerLoader(true)
        try {
            const response = await updateStateBlog({id,approved})
            
            if (response.status === 200) {
                setSucces(true)
                handlerLoader(false)
                
            }
            console.log(response);
            
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

  return (
    <div className='bg-white/90 z-50 fixed inset-0 min-h-screen flex items-center justify-center'>
        <div className='shadow-md rounded-xl min-h-[50%]  h-[80vh] overflow-auto bg-white w-full lg:w-[80%] flex flex-col  pt-2 border-2 border-black/20'>
            <div className='flex justify-end text-principal  text-xl font-semibold hover:font-bold  py-2 px-4'>
                <p className='cursor-pointer' onClick={()=> closeModal(null)}> x </p>
            </div>
            <h2 className='bg-principal py-3 text-white font-bold text-xl w-full text-center mb-4'>{title}</h2>
            <div className='px-4'>
                
              
                <p className='font-semibold'>Autor : {author}</p>
                <p className='font-semibold'>Fecha de creación : {date}</p>
               
            </div>

            <p className='h-[50vh]  my-2 overflow-auto p-4' dangerouslySetInnerHTML={{ __html: text }}></p> 

            <div className='flex justify-end my-2 text-md  px-8'>
                    {
                        approved === 'approved'
                        ? <div className='flex gap-2 items-center'>
                            <p className='font-bold text-green-400 text-md'>Publicado</p>
                            <button  onClick={()=>changeState('pending')}  className='bg-red-400 px-3 cursor-pointer  py-1  rounded-lg  text-white font-bold text-shadow-lg shadow-xl text-md'> No mostrar </button>
                        </div>

                        : <div className='flex gap-2 items-center'>
                            <p className='font-bold text-red-400 text-md'>No publicado</p>
                            <button onClick={()=>changeState('approved')} className='bg-green-400 px-3 cursor-pointer  py-1  rounded-lg  text-white font-bold text-shadow-lg shadow-xl text-md'> Publicar </button>
                        </div>
                    }
            </div>

        </div>

    </div>
  )
}

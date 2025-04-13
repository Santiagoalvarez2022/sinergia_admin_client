import React, { useState } from 'react'
import { sendLogIn } from '../../api/service/Auth';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const navigate = useNavigate()
    const [form,setForm] = useState({
        username : '',
        password : ''
    })
    const [Error , setError ] = useState({
        inital : ""
    })

    const handlerForm = ({target}) =>{
        const {name,value} = target;
        setForm({...form,[name]:value})

    }

    const sendCredential = async() =>{
        try {
            let response = await sendLogIn(form)
            if (response.status === 200) {
                navigate('/panel')
            }
        } catch (error) {
            console.log(error);
            setError(error)
        }
    }


  return (
    <div className='h-screen border flex justify-center items-center'>
        <form className=' flex flex-col items-center justify-center gap-4 border border-black/30 shadow-xl shadow-black/30 rounded-xl px-4 py-8' onSubmit={(e)=>e.preventDefault()}>
            <input onChange={handlerForm} value={form.username} placeholder='Username' name='username'  type="text" className='placeholder:px-1  rounded-xl px-1 border border-black/30 px-3' />
            <input onChange={handlerForm} value={form.password} placeholder='Password' name='password'  type="text" className='placeholder:px-1  rounded-xl px-1 border border-black/30  px-3' />
            <button onClick={()=>sendCredential()} className='border border-black/30 px-4 py-1 rounded-xl text-black cursor-pointer '>Enviar</button>
        </form>
    </div>
  )
}

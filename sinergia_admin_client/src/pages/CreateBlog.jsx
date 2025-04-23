import React, {useState} from 'react'
import Input from '../components/Input/Input'
import { postBlog } from '../api/service/Blogs';
import { Link, useNavigate } from 'react-router-dom';


const validateErrors = ({title,text,author,design_type,image,approved}) =>{
  console.log('props recibidas', title,text,author,design_type,image,approved);
  
  let error = {}
  if (!title || !text || !author || !design_type || !image || !approved) {
   error.incomplete =  'Información incompleta'
  } 

  return error
}

export default function CreateBlog() {
  const [success,setSuccess] = useState(false)
  const navigate = useNavigate()
  const [error,setError] = useState({inital:'Debes completar todos los campos para crear un nuevo Artículo. '}) 

  const [form, setForm] = useState({
    title : '',
    text  : '',
    author : '',
    design_type : 1,
    image : '',
    approved : 'approved'
  })

  const handlerForm = ({target}) =>{
    const {value, name} = target;
    setForm({...form,[name] : value })

    setError(validateErrors({...form,[name] : value }))
  }

  const resetForm = () =>{
    setSuccess(false)
    setForm({
      title : '',
      text  : '',
      author : '',
      design_type : 1,
      image : '',
      approved : 'approved'
    })
  }

  const sendNewBlog = async() =>{
    try { 
      const response = await postBlog(form)
      console.log(response);
      setSuccess(true)
      
    } catch (error) {
      console.log('ERROR EN CREATE BLOG',error.response, );
      if (error.status === 403) {
        navigate('/')
      }
      else {
        setError(error.response.data)
      }
      
    }
  }
  console.log(error);
  
  if (success) {
    return (
      <div className='min-h-screen flex justify-center items-center '>
        <div className='flex flex-col justify-center items-center gap-2 border p-4 rounded-xl'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          <p className='font-semibold '>Artículo creado con exito</p>
          <div className='flex gap-2 font-semibold'> 
            <Link to='/panel/blogs' className='border px-2 rounded-xl py-1 cursor-pointer ' >volver a atras</Link>
            <button className='border px-2 rounded-xl py-1 cursor-pointer bg-principal text-white ' onClick={()=>resetForm()} >Crear nuevo</button>
          </div>
        </div>
      </div> 
    )
  }

  return (
    <div className='min-h-screen flex justify-center items-start  px-4 bg-bg '>
      <div className='mt-10 flex flex-col shadow-md shadow-black/20 flex items-start justify-center w-full rounded-md px-4 pb-4  md:w-[50%] lg:w-[30%]'>
        <h2 className='font-bold p-4 text-center w-full text-xl '>Creación de Articulos</h2>

        <Input value={form.title}  name='title' placeholder='Titulo'  label={'Titulo'} onChange={handlerForm} />
        <Input value={form.author}  name='author' placeholder='Autor' label={'Autor'}  onChange={handlerForm} />
        <Input value={form.image}  name='image'  placeholder='imagen'  label={'Imagen'} onChange={handlerForm} />

        <div className='w-full  flex flex-col mt-1 mb-5 '>
          <label htmlFor="text">Texto</label>
          <textarea placeholder='text' className='border border-black/40 rounded-md w-full placeholder:px-1 h-20 px-4 py-2' name="text" value={form.text} id="text" onChange={handlerForm}></textarea>
        </div>

        <select name="design_type" onChange={handlerForm} id="" className='mb-4'>
          <option disabled value="">Selecciona un estilo</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        
        {
          !Object.keys(error).length && <div className='w-full flex justify-end'>
            <button onClick={()=>sendNewBlog()} className='bg-principal text-bg px-4 py-1 rounded-md '>Enviar</button>
          </div>
        }

        <ul>
            {
              Object.entries(error).map(([key, value])=>{
              return  <li className='text-xs text-red-500 font-bold' key={key}>
              {Array.isArray(value) ? value[0] : value}
              </li>
              }) 
            }
        </ul>
      </div>
    </div>
  )
}

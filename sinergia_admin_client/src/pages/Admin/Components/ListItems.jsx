import React, { useEffect, useState } from 'react'
import style from './styles.module.css'
import { getBlogs } from '../../../api/service/Blogs'
import {Link} from 'react-router-dom'
import BlogDetail from './BlogDetail'
import Loader from '../../../components/Loader/Loader'




export default function ListItems() {
    const props = ['N°', 'Titulo', 'estado', 'Autor', 'Fecha' ]
    const [blogs, setBlogs] = useState([])
    const [blogSelected, setBlogSelected] = useState(null)
    const [loader, setLoader] = useState(false)
    const [tags, setTags] = useState([])

    const handlerLoader = (value) =>{
        setLoader(value)
    }

    const selectedBlog = (blog) =>{
        setBlogSelected(blog)
    }

    const handlerBlogs = async() =>{
        try {
            const response = await getBlogs()
            console.log(response);
            setBlogs(response.data.blogs)
            setTags(response.data.tags)
            localStorage.setItem('tags', JSON.stringify(response.data.tags))

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        handlerBlogs()
    },[])
   
    console.log('tagsssss',tags);
    

    return (
        <div className={`max-h-[90vh] overflow-y-auto ${style.listTable} `}>
            {blogSelected && 
            <BlogDetail 
                blog={blogSelected} 
                closeModal={selectedBlog}
                handlerLoader={handlerLoader}
            />}
            {loader && <Loader />}
            <div className='w-full flex items-center gap-4 justify-end pr-3'>
                <select className='cursor-pointer'>
                    <option selected value="">Todas las categorias</option>
                    {
                        tags.length && tags.map(({name, id})=>{
                            console.log('propiedades', name);
                            
                            return <option key={id} value={name} >{name}</option>
                        })
                    }
                </select>
                <Link to='/createblog' className='text-xs bg-principal/90 text-bg px-4 py-2 mt-4 mb-2 rounded-xl font-semibold shadow-md shadow-black/50' > + Nuevo Articulo</Link>
            </div>


            <table className='  shadow-md rounded-b-3xl  lg:order-1 bg-white w-[95vw]  '> 
                {/* definino la cebezera de la tabla de manera dinamica */}
                <thead className='bg-principal'>
                        <tr className='text-white h-[6vh] text-end text-base'> 
                            {props.length && props.map((props, index)=>{

                                return <th className={`px-1  ${ 3  > index ? ''  : ' hidden  md:table-cell ' } text-center `} key={index}>{props}</th>
                            })} 
                        </tr>
                </thead>
                {/* renderizo cada fila de la tabla de manera dinamica */}
                <tbody className={style.tableList}> 
                    {
                        blogs.length 
                        ? blogs.map((blog, index)=>{
                            const values = Object.values(blog.data_show);
                            return <tr onClick={()=>selectedBlog(blog)} key={index}  className={` text-xs cursor-pointer  `}>
                                { 
                                    values.map((value, index)=> {
                                        
                                     return <td key={index} className={`${ 3  > index ? ''  : ' hidden  md:table-cell ' } font-semibold text-center  text-black/80  py-3  mb-1 `}>{value}</td> 
                                    })
                                }
                            </tr>
                        })
                        : null
                    }
                </tbody>
            </table>
        </div>
  )
}

import React, { useEffect, useState } from 'react'
import style from './styles.module.css'
import { getBlogs } from '../../../api/service/Blogs'
import {Link} from 'react-router-dom'
import BlogDetail from './BlogDetail'
import Loader from '../../../components/Loader/Loader'




export default function ListItems() {
    const props = ['N°', 'TITULO', 'ESTADO', 'AUTOR', 'FECHA' ]
    const [blogs, setBlogs] = useState([])
    const [blogsFiltered,setBlogsFiltered] = useState([])
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
            setBlogsFiltered(response.data.blogs)
            setTags(response.data.tags)
            localStorage.setItem('tags', JSON.stringify(response.data.tags))

        } catch (error) {
            console.log(error);
        }
    }

    const filterBlogs = (id) =>{
        if(parseInt(id) === 0){
            setBlogsFiltered(blogs);
            return
        } 

        let arrayFilter = blogs.filter((blog)=>{
           for (let index = 0; index < blog.data.tags.length; index++) {
                const element = blog.data.tags[index];
                if (element.id == id) {
                    return blog
                }            
           }

        })
        setBlogsFiltered(arrayFilter)
    }

    useEffect(()=>{
        handlerBlogs()
    },[])


    return (
        <div className={`max-h-[90vh] overflow-y-auto ${style.listTable} `}>
            {blogSelected && 
            <BlogDetail 
                blog={blogSelected} 
                closeModal={selectedBlog}
                handlerLoader={handlerLoader}
            />}
            {loader && <Loader />}
            
            <div className='w-full flex items-center gap-4 justify-end  px-2 '>
                <select onChange={(e) => filterBlogs(e.target.value)} className='cursor-pointer border rounded-xs bg-white'>
                    <option value={0}>Todas las categorias</option>
                    {
                        tags.length && tags.map(({name, id})=>{
                            return <option onClick={()=>filterBlogs(id)} key={id} value={id} >{name}</option>
                        })
                    }
                </select>


                <Link to='/createblog' className='text-xs bg-principal/90 text-bg px-4 py-2 mt-4 mb-2 rounded-xs font-semibold shadow-xs shadow-black/50 text-white' > + Nuevo Articulo</Link>
            </div>


            <table className='shadow-md border-gray-200 border-2 lg:order-1 bg-white w-[95vw] lg:w-[60vw]  '> 
                
                {/* definino la cebezera de la tabla de manera dinamica */}
                <thead className='bg-principal '>
                        <tr className='text-white h-[4vh] text-end text-base'> 
                            {props.length && props.map((props, index)=>{
                                return <th className={`px-1  ${ 3  > index ? ''  : ' hidden  md:table-cell ' } text-center text-xs `} key={index}>{props}</th>
                            })} 
                        </tr>
                </thead>

                {/* renderizo cada fila de la tabla de manera dinamica */}
                <tbody className={style.tableList}> 
                    {
                        blogsFiltered.length 
                        ? blogsFiltered.map((blog, index)=>{
                            const values = Object.values(blog.data_show);
                            return <tr onClick={()=>selectedBlog(blog)} key={index}  className={` text-xs cursor-pointer border-2 border-gray-300 `}>
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

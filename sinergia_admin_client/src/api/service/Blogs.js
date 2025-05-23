import api from '../index.js'

export const getBlogs = async(author='',id='') =>{
    try {
        const response = await api.get(`/admin/blogs?author=${author}&&id=${id}`,{ withCredentials: true});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const postBlog = async(form) =>{
   
    const response = await api.post('/blog',form,{ withCredentials: true } )
    console.log('response ', response);
    return response
}

export const  updateStateBlog = async({id,approved})=>{
    const response = await api.put(`/admin/blog/${id}?approved=${approved}`,{},{ withCredentials: true});
    return response

} 


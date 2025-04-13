import api from "../index.js";

export const sendLogIn = async(form) =>{
    try {
        if (!form.username || !form.password) throw Error('Incomplete data provided.')
            return await api.post('/admin/login', form)

        // solo en https
        // return await api.post('/admin/login', form, {
        //     withCredentials: true 
        // })

    } catch (error) {
        throw error.response?.data || { error: "Error in Log In" }
    }
}

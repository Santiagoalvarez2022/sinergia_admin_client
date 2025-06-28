import api from "../..";

export const getUsers = async() =>{
    try {
        return await api.get('/admin/users',{ withCredentials: true})
    } catch (error) {
        throw error.response?.data || { error: "Error getting users" }
    }
}
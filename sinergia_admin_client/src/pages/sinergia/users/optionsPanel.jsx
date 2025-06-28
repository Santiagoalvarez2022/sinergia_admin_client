import BlogIcon from "../../../icons/BlogIcon";
import UsersPluralIcon from "../../../icons/UsersPluralIcon";
import { user_config_table } from "./config/user_config_table";

//el'id' del options panel debe ser el mismo 'id'  que el de optionsConfig.
export const optionsPanel = [ 
    {
        id : 0,
        label : 'Usuarios',
        icon : <UsersPluralIcon color='#fff'/>,
    },
    {
        id : 1,
        label : 'Feedbacks',
        icon : <BlogIcon color='#fff' />
    }
]

//objeto donde estan las configuraciones de cada options, tambien cada 'key' es el 'id' correspondiente en las opciones del 'optionsPanel'.
export const optionsConfig = {
    0 : user_config_table,
    1 : null
}

export const getConfigOption = (id=null) =>{
    return optionsConfig[id]
} 
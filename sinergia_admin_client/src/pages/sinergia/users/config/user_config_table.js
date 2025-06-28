/*
esta configuracion es parte de la informacion que puede ser modificada desde /config en el menu del administrador, deberia hacer un rewrite de este archivo si queremos mostrar mas o menos informacion en la tabla
*/

import { getUsers } from "../../../../api/service/sinergia/users";

//esta funcion hace la peticion al servidor y modifico el array recibido para que haga match con el objConfig
const normaliceArrayRecibed = async(table_th=[]) =>{
    //table_th es el array de la propiedades que necesito obtener
    let {data} = await getUsers();
    console.log(data);
    
    return data.map(obj =>{
        let newObj = {}
        table_th.forEach(key =>{
          
            if (obj.hasOwnProperty(key)) {
                if (key === 'createdAt') {

                    let newDate = new Date(obj[key]);
                    const formatoLegible = newDate.toLocaleDateString('es-AR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });

                    newObj[key] = formatoLegible;
                } else {
                    newObj[key] = obj[key]
                }
            }
        })
        return newObj
    })
}

    export const user_config_table = {
    title : 'Vista de todos los usuarios del sistema',
    subtitle :' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ipsum alias amet. Voluptatibus, dolorum magni sapiente necessitatibus, corporis nam architecto vitae eligendi ullam sint saepe reiciendis rerum non magnam vel?',
    table_th : ['name','lastname','nickname' ,'email','status','createdAt'],
    get_data : normaliceArrayRecibed
}








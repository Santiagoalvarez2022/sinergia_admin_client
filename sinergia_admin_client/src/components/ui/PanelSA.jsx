import { useEffect, useState } from 'react';
import TablesSA from './TablesSA'
import { getConfigOption } from '../../pages/sinergia/users/optionsPanel';

export default function PanelSA({optionsPanel}) {
    
    //configuracion de la opcion seleccionada, a esta configuracion responde los posibles componentes a rendereizar ej : TablesSa, forms, etc....
    const [configTable,setConfigTable] = useState(null)

    //convierto optionsPanel en un estado "optionsPanelState" que puedo modificar de manera reactiva para mejorar los estilos
    const [optionsPanelState, setOptionsPanelState] = useState([]);
    useEffect(()=>{
        if (optionsPanel.length) {
            //voy a añdir una propiedad 'selected' para la el manejo de estilos
            let arr = optionsPanel.map((option)=>({...option,selected:false}))
            setOptionsPanelState(arr);
        }
    },[])

    //funcion que que seleciona la opcion y su configuracion correspondiente
    const handlerOptionsState = (id) =>{
        const filter = optionsPanelState.map((option)=> option.id === id ? {...option,selected : true} : {...option, selected : false})
        setOptionsPanelState(filter)
        //ahora obtengo la configuracion correspondiente al id
        const config = getConfigOption(id);
        setConfigTable(config)
    }

    


  return (
   <div className="grid grid-cols-[20%_80%] shadow min-h-[95vh] rounded-xl bg-white ">
        <div className="pl-4 flex flex-col gap-2  bg-blue-sa rounded-l-xl py-12">
            {/*barra lateral con las opciones, al selecionar una opcion se buscara la configuracion requrida */}
            {
                optionsPanelState.length && optionsPanelState.map((option)=>{
                    return <div onClick={()=> handlerOptionsState(option.id)} key={option.id} className={`py-4 flex text-lg gap-2 font-semibold items-center cursor-pointer  group ${option.selected ? 'text-blue-sa bg-white rounded-l-xl shadow ' : 'text-white '}`}>
                        <div className='h-5 w-5'>{option.icon}</div>
                        <span>{option.label}</span>
                    </div>
                })
            }
        </div>
        <div className="border-gray-200 border-3 border-l-0 rounded-r-xl p-4 ">
            {configTable && <TablesSA configTable={configTable} />}
        </div>
    </div>   
  )
}

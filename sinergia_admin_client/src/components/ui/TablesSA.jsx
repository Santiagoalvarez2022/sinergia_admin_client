/*
- necesita recibir config.txt de cada padre para renderizar propiedades correspondientes
- estilos de ser necesarios
- titulos y subtitulos como descripcion
*/

import { useEffect, useState } from "react";

export default function TablesSA({configTable}) {
  const {title, subtitle, table_th, get_data} = configTable;
  //estado con la informacion a mostrar en el body de la tabla
  const [dataRows, setDataRows] = useState([]);


  //al montarse el componente se ejecuta la peticion al servidor o la funcion get_data, cada opcion tendra o no una funcion similar, pero deberan ser llamadas de esta manera.,

  //al ser una tabla si o si es para mostrar información, por lo tanto hara una peticon al backend

  const getDataRows = async() =>{
    try {
      let result = await get_data(table_th)
      setDataRows(result)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (get_data) {
      getDataRows()
    }
  },[]) 
  
  return (
    <div className='h-full '>

        <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-base text-gray-500">{subtitle}</p>
        </div>  
        <br />

        <div className="border text-end">
          filtros y ordenamientos
        </div>
        <br /> 
        <div className="rounded-md overflow-x-scroll ">
          <table className='w-full'>
          {/* encabezado de la tabla, donde iran las cabeceras de las columnas */}
            <thead className="">
              <tr className="bg-blue-sa/85 ">
                <th className="p-2 text-gray-200  border-black border-2">N°</th>
                {table_th.length && table_th.map((cell)=><th key={cell} className=" px-4 text-xs text-gray-200 border-black border-2">{cell.toUpperCase()}</th>)} 
              </tr>
            </thead>
            <tbody>
              {
                dataRows.length ? dataRows.map((row, index)=>{
                  return <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : '' }>
                    <td className=" border-2 border-gray-200  px-2 text-center font-semibold text-gray-600 " >{index + 1} </td>
                    {Object.values(row).map((cell) =><td className=" text-md border-gray-200 border-2  px-2 text-gray-600">{cell }</td>)}
                  </tr>
                })
                : <tr></tr> 
              }
            </tbody>
          </table>      
        </div>
    </div>
  )
}

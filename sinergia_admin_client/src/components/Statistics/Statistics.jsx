function StatisticsItem ({data}){
    const {title,count} = data;
 
    return(
        <div className='flex flex-col text-principal justify-center items-center gap-1   rounded-xl '> 
            <h3 className='text-center font-bold text-3xl    ' >{count}</h3>
            <p  className='text-center font-bold text-principal'  >{title}</p>
        </div>
    )
}


export default function Statistics({id}) {
    /*
        - con el id hago una peticion al back para traer la data de las estadisticas, 
    */
    const statics_data = [
        {
            title : "Aprobados",
            count : 50
        },
        {
            title : "Rechazados",
            count : 20
        },
        {
            title : "Pendientes",
            count : 17
        },
        {
            title : "otro valor posible",
            count : 32
        },
    ]

  return (

        <div className='grid grid-cols-2 lg:order-2  gap-2'>
          {
              statics_data.map((data, index)=>{
                  return <StatisticsItem data={data}  key={index}/>   
              })
          }
        </div>
 
  )
}

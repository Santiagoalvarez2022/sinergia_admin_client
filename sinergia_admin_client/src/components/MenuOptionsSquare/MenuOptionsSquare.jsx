import ButtonSquare from "./ButtonSquare"

export default function MenuOptionsSquare({arrayOptions=[]}) {
  return (
   <div className=' grid grid-cols-2 gap-2 px-4  md:flex '>
          {
            arrayOptions.length && arrayOptions.map((data)=>{
              return <ButtonSquare key={data.id} data={data}/>
            })
          } 
      </div>
  )
}

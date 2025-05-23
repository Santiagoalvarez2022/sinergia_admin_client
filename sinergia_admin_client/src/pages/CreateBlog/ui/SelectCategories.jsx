import {useState, useEffect} from 'react'


function OptionsCat({name,selected,selectedTags,id}) {
  
  return (
    <div onClick={()=>selectedTags(id)}  className={`border-principal border-1  shadow px-4 rounded-xl cursor pointer ${selected ? 'bg-principal text-white ' : 'bg-white text-principal'}`}>
      <span>{name}</span>
    </div>
  )
}




export default function SelectCategories({handlerForm}) {
  const [arrayTags, setTags] = useState([])
  
  useEffect(()=>{
    const tags = JSON.parse(localStorage.getItem('tags'))
    setTags(tags)
  },[]) 

  const selectedTags = (id) =>{
    const arrayModify = arrayTags.map((tag)=>{
      if (tag.selected) {
        //si esta seleccionado 
        if (tag.id === id) {
          //si esta seleccionado y lo volvi a seleccionar
          tag.selected = false
        } 
 

      } else {
        
        if (tag.id === id) {
          //si esta seleccionado y lo volvi a seleccionar
          tag.selected = true
        } 
      }
      
      return tag
    })
    let arrayFiltred = arrayModify.filter((tag)=> tag.selected)
    handlerForm({
      target : {
        name : 'tags',
        value : arrayFiltred
      }
    })
    
    setTags(arrayModify)
  }




  return (
    <div className='flex flex-col gap-2 mb-4'>
      <h3>Seleccionar la categorias</h3>
      <div className='grid grid-cols-1 gap-2'>
        {
          arrayTags.length && arrayTags.map(({id,name, selected})=>{
            
            return <OptionsCat selectedTags={selectedTags} selected={selected} key={id} id={id} name={name}/>
          })
        }
      </div>
    </div>
  )
}

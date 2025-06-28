import ListItems from '../Components/ListItems'

 
export default function Articles() {
  return (
   <div className=' pb-10 bg-bg min-h-screen '>

        <h3 className='text-md md:text-xl mb-2 mx-2 pt-4 font-bold text-principal tedow'>Articulos </h3>
        <div className='flex justify-center  '>
            <ListItems  className='lg:order-1'/>
        </div>

   </div> 
  )
}

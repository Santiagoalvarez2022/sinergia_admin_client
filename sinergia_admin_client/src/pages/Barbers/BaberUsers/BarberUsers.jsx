import CreateNewUsers from './ui/CreateNewUsers'

export default function BarberUsers() {

  return (
    <div className='h-[100vh]'>
        <div className=' mt-4 lg:mt-12 flex flex items-center justify-center '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" h-5 w-5   lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className='lg:text-xl'>Usuarios</span>
        </div>
        <CreateNewUsers />
    </div>
  )
}

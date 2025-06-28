import HistoryNavBar from "../../components/HistoryNavBar/HistoryNavBar";

export default function Header() {
  return (
    <header className='bg-gray-300  w-full shadow-xs border-gray-400 py-4 '>
      <div className="flex justify-between items-center px-4">
        <p className='text-md font-semibold md:text-xl'>Panel admininstración</p>
        <div className='flex items-center gap-1 my-4 bg-black/50 px-2 py-1 rounded-md'>
            <h1 className='text-md md:text-xl text-white'>Esencia</h1>
            <h1 className='border-[#D3AD3C] border-2 h-5 w-5  md:h-6 md:w-6 flex justify-center items-center text-[#FFDE59] rounded-full p-0 text-[.7em]  '> it</h1> 
        </div>
      </div>    
      <HistoryNavBar />
    </header>)   
}
 
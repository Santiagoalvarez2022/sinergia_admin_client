import MenuOptionsSquare from "../../components/MenuOptionsSquare/MenuOptionsSquare";
import { optionsMenu } from "./optionsMenu";
export default function BarberAdmin() {
  return (
   <div className='h-[100vh]  bg-bg pt-8'>
        <div className="">
            <MenuOptionsSquare arrayOptions={optionsMenu} />
        </div>
   </div>
  )
}

 
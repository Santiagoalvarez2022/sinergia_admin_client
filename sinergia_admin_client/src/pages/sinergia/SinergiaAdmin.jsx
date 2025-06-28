import MenuOptionsSquare from "../../components/MenuOptionsSquare/MenuOptionsSquare";
import { optionsMenu } from "./optionsMenuS";
export default function SinergiaAdmin() {
  return (
    <div className="h-[100vh] pt-4">
        <div className="" >
            <MenuOptionsSquare arrayOptions={optionsMenu}/>
        </div>
    </div>
  )
}

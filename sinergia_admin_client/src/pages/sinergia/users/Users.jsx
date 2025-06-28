import PanelSA from "../../../components/ui/PanelSA";
import UserIcon from "../../../icons/UserIcon";
import {optionsPanel }from "./optionsPanel";


export default function Users() {
    //estado que configura el componente del panel 
    return (
        <div className="min-h-[100vh] p-4 flex flex-col items-center bg-bg">
            <div className="flex items-center mt-12">
                <div className="h-10 w-10"><UserIcon color={'#162c39'}/></div>
                <h2 className="font-bold text-xl px-4 text-[#162c39]">Usuarios registrados en SinergIA</h2>
            </div>
            <br />
            <div className="w-[90%]">
               <PanelSA optionsPanel={optionsPanel} />
            </div>
        </div>
  )
}

import ButtonSquare from "../../../components/MenuOptionsSquare/ButtonSquare";
import MenuOptionsSquare from "../../../components/MenuOptionsSquare/MenuOptionsSquare";
import TablesSA from "../../../components/ui/TablesSA";
import optionsConfig from './optionsMenuConfig'




export default function ConfigSinergia() {

    return (
    <div className="min-h-[100vh] p-4 bg-bg">
      <div className="bg-white rounded-xl shadow-md p-2 flex flex-col gap-2">
        <div className="border-gray-200 border-3 p-4 rounded-xl">
            <h1 className="text-xl font-bold">Panel de configuración</h1>
            <p className="italic text-base w-[80%]">Desde esta vista podrás acceder a todos los módulos disponibles para configurar tu sistema. Al seleccionar un módulo, verás las propiedades que ya están visibles y podrás añadir nuevas para personalizar la vista principal de la tabla según tus necesidades.</p>
            <p className="font-bold md:hidden">ESTE MODULO SOLO ESTA DISPONIBLE EN COMPUTADORA </p>
        </div>
        <div className="hidden lg:flex   lg:grid lg:grid-cols-[20%_80%] lg:min-h-[80vh] lg:rounded-xl ">
            <div className="px-2  bg-blue-sa rounded-xl">
                {/*opciones a editar */}
                {
                    optionsConfig.length && optionsConfig.map((data)=>{
                        return <div className="flex ">
                            <div className="h-5 w-5">{data.icon}</div> 
                        </div>
                    })
                }
            </div>
            <div className="border-gray-200 border-3 rounded-xl">
                <table>ssss</table>
            </div>
        </div>   
      </div>
    </div>
  )
}

import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRigth from "../../icons/ArrowRigth";
import { useNavigate, useLocation } from 'react-router-dom';

export default function HistoryNavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnIndex = location.pathname === '/panel';
 
  if (isOnIndex) return null;
  return (
    <div className="flex justify-between px-8 mt-4">
        <button className="h-7 w-7 flex items-center justify-center border-2 rounded-full text-gray-700 hover:bg-gray-100 transition cursor-pointer" 
            aria-label="Volver" onClick={() => navigate(-1)}> 
            <ArrowLeft /> 
        </button>
    
        <button className="h-7 w-7 flex items-center justify-center border-2 rounded-full text-gray-700 hover:bg-gray-100 transition cursor-pointer" 
            aria-label="Volver" onClick={() => navigate(1)}> 
            <ArrowRigth />
        </button>
    </div>   
  )
}

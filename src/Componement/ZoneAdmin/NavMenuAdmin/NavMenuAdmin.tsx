import "./NavMenuAdmin.css"
import { useNavigate } from "react-router"
export default function NavMenuAdmin() {
  let navigate = useNavigate();
  
    return (
    <div className="main_nav_menu">
        <div onClick={()=> navigate("adminNavmenu")}>

       Le nav menu
        
        </div>

    </div>
  )
}

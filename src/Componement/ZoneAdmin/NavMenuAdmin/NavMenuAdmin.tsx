import "./NavMenuAdmin.css"
import { useNavigate } from "react-router"
import LinkAdmin from "../LinkAdmin/LinkAdmin";
export default function NavMenuAdmin() {
  let navigate = useNavigate();
  
    return (
    <div className="main_nav_menu">
        <div onClick={()=> navigate("adminNavmenu")}>

<LinkAdmin link="/Admin/AdminNavmenu" name="menu de navigation"/>        
        </div>

    </div>
  )
}

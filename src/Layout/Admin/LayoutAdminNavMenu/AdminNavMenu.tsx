import { Outlet } from "react-router";
import LinkAdmin from "../../../Componement/ZoneAdmin/LinkAdmin/LinkAdmin";
export default function AdminNavMenu() {
  
  return (
    <div>
    
    <h1>
      AdminNavMenu
    </h1>

    <div> 
    <h1>
      <LinkAdmin link="/admin/addNavMenu" name=" ajouter un lien au menu de navigation"/>
    </h1>
    </div>

    <div>
    <Outlet/>
    </div>

    </div>

    
  
  )
}

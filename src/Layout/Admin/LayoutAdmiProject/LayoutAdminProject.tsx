import { Outlet } from "react-router"
import LinkAdmin from "../../../Componement/ZoneAdmin/LinkAdmin/LinkAdmin"
import "./LayoutAdminProject.css"
export default function LayoutAdminProject() {
  return (
    <div className="MainLayoutAdminProject">
      
    <div className="div_boxLayoutAdminProject">
      <div><LinkAdmin link={"ListeAdminProject"} name={"list of project"}/></div>
      <div><LinkAdmin link = {"addproject"} name = "addproject"/></div>
    </div>
      
      <div className="OutletLayoutAdminProject">
       <Outlet/>  
      </div>

    </div>
  )
}

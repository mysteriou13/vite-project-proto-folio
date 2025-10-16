import { Link } from "react-router"
import "./LinkNavMenu.css"
import { baselink } from "../../Interface/InterfaceNavmenu"
export default function LinkNavMenu({name,address}:baselink) {
  return (
    
    <Link className='link_nav_header' to={address}>{name}</Link>
    
  )
}


import DivNavlinkMenu from "../DivNavlinkMenu/DivNavlinkMenu";
import { navSelector } from "../../../Store/Selector/SelectorNavMenu";
import { LinkNav } from "../../../Interface/InterfaceNavmenu";
import "./ListeNavMenuAdmin.css"

export default function ListeNavMenuAdmin() {

 const {items} = navSelector()

   let datalink:LinkNav[] = items.data;

 /*function display or hidden fromulaireupdateNavLink */
    return (
  <div>
   <ul className="ul_box">
    {datalink.map((navlink)=>(

<div>

<DivNavlinkMenu name={navlink.name} address={navlink.address} typelink={navlink.typelink} />

  </div>

    ))}
         </ul>
    

    
    </div>
  )
}

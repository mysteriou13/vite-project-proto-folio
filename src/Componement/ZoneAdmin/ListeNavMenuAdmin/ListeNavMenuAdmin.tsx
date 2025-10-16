
import { useGetNavMenuQuery } from "../../../Store/api/ApiNavMenu"
import DivNavlinkMenu from "../DivNavlinkMenu/DivNavlinkMenu";
import "./ListeNavMenuAdmin.css"
export default function ListeNavMenuAdmin() {
 const { data } = useGetNavMenuQuery();
 
 /*function displauy or hidden fromulaireupdateNavLink */

    return (
  <div>
   <ul className="ul_box">
    {data?.data.map((navlink)=>(

<div>

<DivNavlinkMenu name={navlink.name} address={navlink.address} />

  </div>

    ))}
         </ul>
    

    
    </div>
  )
}

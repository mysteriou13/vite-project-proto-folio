
import DivNavlinkMenu from "../DivNavlinkMenu/DivNavlinkMenu";
import { useEffect } from "react";
import { navSelector } from "../../../Store/Selector/SelectorNavMenu";
import { LinkNav } from "../../../Interface/InterfaceNavmenu";
import { useGetNavMenuQuery } from "../../../Store/api/ApiNavMenu";
import { useDispatch } from "react-redux";
import { setNav } from "../../../Store/Slice/NavSlice";
import "./ListeNavMenuAdmin.css"
export default function ListeNavMenuAdmin() {

     const {items} = navSelector()
     const dispatch = useDispatch();
     const { data, isLoading, error } = useGetNavMenuQuery();
     let datalink:LinkNav[] = items?.data ?? [];   

  useEffect(() => {
    if (data && !isLoading && !error) {
      dispatch(setNav(data));
  datalink = items?.data ?? [];   
    }
  }, [data,items, isLoading, error, dispatch]);



 /*function display or hidden fromulaireupdateNavLink */
    return (
  <div>
   <ul className="">
    {datalink.map((navlink)=>(

<div>

<DivNavlinkMenu name={navlink.name} address={navlink.address} typelink={navlink.typelink} id = {navlink._id} />

  </div>

    ))}
         </ul>
    

    
    </div>
  )
}

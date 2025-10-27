
import DivNavlinkMenu from "../DivNavlinkMenu/DivNavlinkMenu";
import { useEffect, useState } from "react";
import { navSelector } from "../../../Store/Selector/SelectorNavMenu";
import { LinkNav } from "../../../Interface/InterfaceNavmenu";
import { useGetNavMenuQuery } from "../../../Store/api/ApiNavMenu";
import { useDispatch } from "react-redux";
import { setNav } from "../../../Store/Slice/NavSlice";
import { NavDataLink } from "../../../Interface/InterfaceNavmenu";
import "./ListeNavMenuAdmin.css"
export default function ListeNavMenuAdmin() {

     const {items} = navSelector()
     const dispatch = useDispatch();
     const { data, isLoading, error } = useGetNavMenuQuery();
     
  const [datalink, setDatalink] = useState<{ data: LinkNav[] } | undefined>();
 
    useEffect(() => {
    if (data) {
      setDatalink(data);
      dispatch(setNav(data));
    }
  }, [data, dispatch]);


     useEffect(()=>{

      console.log("item delete",items.data);
        setDatalink(items)
     },[items])

 /*function display or hidden fromulaireupdateNavLink */
    return (
  <div>
   <ul className="">

   {
    datalink?.data.map((navlink,id) => (
     
          <DivNavlinkMenu
          key={id}
            name={navlink.name}
            address={navlink.address}
            typelink={navlink.typelink}
            id={navlink._id}
          />
        
   
   ))}
   
         </ul>
    

    
    </div>
  )
}



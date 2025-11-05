
import DivNavlinkMenu from "../DivNavlinkMenu/DivNavlinkMenu";
import { useEffect } from "react";
import { navSelector } from "../../../Store/Selector/SelectorNavMenu";
import { useGetNavMenuQuery } from "../../../Store/api/ApiNavMenu";
import { useDispatch } from "react-redux";
import { setNav } from "../../../Store/Slice/NavSlice";
import "./ListeNavMenuAdmin.css"
export default function ListeNavMenuAdmin() {

     const {linknav} = navSelector()
     const dispatch = useDispatch();
     const { data,refetch} = useGetNavMenuQuery();

 
  useEffect(() => {
  // 🔁 Recharger les données depuis le backend
  refetch();

  // ✅ Vérifier que data existe avant de l’utiliser
  if (data) {
    dispatch(setNav({ data: data.data ?? [] })); // ✅ mise à jour Redux aussi
  }
}, [data]);




    return (
  <div>
   <ul className="">

   {
    linknav?.data.map((navlink: {
      address: string;
      typelink: string;
       _id: any; 
       name: string; 
       },id: any) => (
     
       <DivNavlinkMenu
        name={navlink.name}
        address={navlink.address}
        key={id}
        typelink={navlink.typelink}
        id={navlink._id} />
      
   
   ))}
   
         </ul>
    

    
    </div>
  )
}


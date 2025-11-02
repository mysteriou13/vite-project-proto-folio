import { useState } from 'react'
import LinkNavMenu from '../../LinkNavMenu/LinkNavMenu'
import FormLinkNavMenu from '../../From/Admin/FromLinkNavMenu/FormLinkNavMenu'
import { useUpdateNavLinkMutation,useGetNavMenuQuery,useDeleteLinkMutation } from '../../../Store/api/ApiNavMenu'
import { baselink } from '../../../Interface/InterfaceNavmenu'
import { setNav } from '../../../Store/Slice/NavSlice'
import { navSelector } from '../../../Store/Selector/SelectorNavMenu'
import { removeNavLink } from '../../../Store/Slice/NavSlice' 
import { useAuth } from '../../../Store/Selector/SelectorUser'
import { useDispatch } from 'react-redux'
import "./DivNavlinkMenu.css"


export default function DivNavlinkMenu({name,address,typelink,id}:baselink) {
    const {items} = navSelector()
    const {token} = useAuth()
     const { refetch} = useGetNavMenuQuery();
    const [deleteLink,] = useDeleteLinkMutation();
    const [UpdataNavLink] = useUpdateNavLinkMutation();
    const [visible, setVisible] = useState<boolean>(false)
    const dispatch = useDispatch();


    const handlenamelink = (data:string)=>{
      console.log("updatelink",items);
    
         const updatedItems = items.data?.map((link: { _id: string}) =>
      link._id === id ? { ...link, name: data } : link
    );

         console.log("updateitems",updatedItems);

        dispatch(setNav({ data: updatedItems }));
   
    }

   /*deletelink */
const deleteitem = async () => {
  try {
    // 🔐 Suppression avec token
    await deleteLink({ id, token }).unwrap();
    // 🧹 Supprimer localement dans Redux
    dispatch(removeNavLink(id!));

    //  Recharger les données
    await refetch();

  } catch (error) {

  }
};


       /*display or hidden formulaire navlink*/
     const displayFromUpdate= ()=>{
      if(visible == false){

        setVisible(true);

      }else{
        setVisible(false)
      }
    }
   
  return (
<div className='cardboxdivlinkmenu'>

  <div className='boxdivlinkmenu'>
  <div>
   <LinkNavMenu name={name} address={address} typelink={typelink}/>
  </div>

<div className='divbuttonDivlinkMenu'>
  <div>
     <input type = "button" value = "modifier" onClick={displayFromUpdate}/>
  </div>

  <div><input type = "button" value = "suprrimer" onClick={deleteitem}/></div>



</div>

  </div>
  
  <div>
 
{ visible && (
 
    <FormLinkNavMenu NavLink={UpdataNavLink}
          name={name}
          address={address}
          typelink={typelink}
          title={`Modifier Lien de la page ${name}`} 
           datalink={handlenamelink}    
           id={id!}
    />
)
}

  </div>

  

    </div>





  )
}



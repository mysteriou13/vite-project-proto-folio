import { useState } from 'react'
import LinkNavMenu from '../../LinkNavMenu/LinkNavMenu'
import FormLinkNavMenu from '../../From/Admin/FromLinkNavMenu/FormLinkNavMenu'
import { useUpdateNavLinkMutation } from '../../../Store/api/ApiNavMenu'
import { baselink } from '../../../Interface/InterfaceNavmenu'
export default function DivNavlinkMenu({name,address}:baselink) {
    
     const [UpdataNavLink] = useUpdateNavLinkMutation();
       const [visible, setVisible] = useState<boolean>(false)

       /*display or hidden formulaire navlink*/
     function displayFromUpdate(){
      if(visible == false){

        setVisible(true);

      }else{
        setVisible(false)
      }
    }
   
  return (
    <div>
<div>
  <div>
  <LinkNavMenu name={name} address={address}/>
  </div>
  <div>
  <input type = "button" value = "modifier" onClick={displayFromUpdate}/>
  </div>
  <div className="">
 
{ visible && (
 
    <FormLinkNavMenu NavLink={UpdataNavLink} title={"Modifier Link de navigation"} />
)
}

  </div>

  </div>

    </div>





  )
}

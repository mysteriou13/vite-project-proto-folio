import { useState } from 'react'
import LinkNavMenu from '../../LinkNavMenu/LinkNavMenu'
import FormLinkNavMenu from '../../From/Admin/FromLinkNavMenu/FormLinkNavMenu'
import { useUpdateNavLinkMutation } from '../../../Store/api/ApiNavMenu'
import { baselink } from '../../../Interface/InterfaceNavmenu'
import "./DivNavlinkMenu.css"
export default function DivNavlinkMenu({name,address,typelink}:baselink) {
    
    const [UpdataNavLink] = useUpdateNavLinkMutation();
    const [visible, setVisible] = useState<boolean>(false)
    const [namelink,setNameLink] = useState<string>(name)
    const [nameadresse,setnNameAdress] =useState<string>(address)

    const handlenamelink = (data:string)=>{
      setNameLink(data)
    }

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
   <LinkNavMenu name={namelink} address={address} typelink={typelink}/>
  </div>
  <div>
     <input type = "button" value = "modifier" onClick={displayFromUpdate}/>
  </div>
  </div>
  
  <div>
 
{ visible && (
 
    <FormLinkNavMenu NavLink={UpdataNavLink}
          name={namelink}
          address={address}
          typelink={typelink}
          title={`Modifier Lien de la page ${namelink}`} 
           datalink={handlenamelink}    
    />
)
}

  </div>

  

    </div>





  )
}

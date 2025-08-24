import { readNavMenu } from '../../Store/Thunks/thunksNavMenu' 
import { useAppDispatch} from '../../Store/hook' 
import { useAuth } from '../../Store/Selector/SelectorUser'
import { navSelector } from '../../Store/Selector/SelectorNavMenu'
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu'
import { useEffect, useState } from 'react'
import "./NavMenu.css"
export default function NavMenu() {
 type LinkNav= {
  _id:string,
  name:string,
  adress:string,
  typelink:string
 }
 const dispatch = useAppDispatch();
const { isLoggedIn, role } = useAuth();
const { items } = navSelector()
let [itemtab,setitemtab] = useState<LinkNav[]>([])
const [filtreitem,setfilteritem] = useState<LinkNav[]>([])

  // 🔹 Charger les données d au montage du composant
  useEffect(() => {
    dispatch(readNavMenu());
  }, [dispatch]);

  useEffect(()=>{

  if (Array.isArray(items.data)) {
    const filtered = items.data.filter(
      (link: { typelink: string }) => link.typelink === "default" || link.typelink === "invisibleuserconnect"
    );
    setfilteritem(filtered);
  }

},[items])

  return (
    <div className="box_header">
   
         
      <nav>
        <ul className='ul_box'>
          <>
           {Array.isArray(filtreitem) && filtreitem.map((link: string) => (
            
           <LinkNavMenu data={link}/>
            
          ))}
          
          </>
          
        </ul>
      </nav>
    </div>
  )
}

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

  // 🔹 Charger les données d au montage du composant
  useEffect(() => {
    dispatch(readNavMenu());
  }, [dispatch]);

useEffect(() => {
    setitemtab(items.data)

    console.log("itemtab", items.data);

  
}, [items]);

  return (
    <div className="box_header">
   
         
      <nav>
        <ul className='ul_box'>
          <>
          { itemtab.map((data)=> 
          
          <LinkNavMenu data = {data}/>

          )}
          
          </>
          
        </ul>
      </nav>
    </div>
  )
}

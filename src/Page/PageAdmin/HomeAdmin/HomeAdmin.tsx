
import { Outlet } from 'react-router'
import TitlePage from '../../../Componement/TitlePage/TitlePage'
import ListeNavMenuAdminMenu from '../../../Componement/ZoneAdmin/ListeNavAdminMenu/ListeNavMenuAdminMenu'
import FormConnection from '../../../Componement/From/User/Connection/FromConnection'
import { useAuth } from '../../../Store/Selector/SelectorUser'
import "./HomeAdmin.css"
export default function HomeAdmin() {

  return (
    <div  className = "main_layout">

      <div className='barre_layout'> 
           <TitlePage title="ZoneAdmin" classStyle="title_layout"/>
        </div>

    <div>
   <div> 

  
      {localStorage.getItem('role') === "admin" ?(
      <main>
        <div className='boxadmin'>
          <div>
         <ListeNavMenuAdminMenu nameclass={'HomeAdmin_main_nav_menu'}/>
          </div>
          <div><Outlet/></div>
          </div>

      </main>
      ) :(
        <div className='AdminConnnection'>
        <FormConnection/>
        </div>
      )
      }

    </div>
    </div>
      </div>
  )
}


import { Outlet } from 'react-router'
import TitlePage from '../../../Componement/TitlePage/TitlePage'

import NavMenuAdmin from '../../../Componement/ZoneAdmin/NavMenuAdmin/NavMenuAdmin'
import FormConnection from '../../../Componement/From/User/Connection/FromConnection'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../Store/store'
import './ZoneAdmin.css'
export default function ZoneAdmin() {

  const role = useSelector((state: RootState)=> state.login.role)

  return (
    <div  className = "main_layout">
  
      <div className='barre_layout'> 
           <TitlePage title="ZoneAdmin" classStyle="title_layout"/>
        </div>

    <div>
   <div> 

  
      {role === "admin" ?(
      <main>
        <div className='boxadmin'>
          <div>
          <NavMenuAdmin/>
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

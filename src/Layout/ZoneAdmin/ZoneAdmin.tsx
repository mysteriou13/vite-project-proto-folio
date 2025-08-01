
import { Outlet } from 'react-router'
import TitlePage from '../../Componement/TitlePage/TitlePage'
import  Header  from '../../Componement/Header/Header'
import FormConnection from '../../Componement/From/Connection/FromConnection'
import { useSelector } from 'react-redux'
import type { RootState } from '../../Store/store'
import './ZoneAdmin.css'
export default function ZoneAdmin() {

  const role = useSelector((state: RootState)=> state.login.role)

  return (
    <div  className = "main_layout">
      <div className='barre_layout'> 
         </div>
    <div>

    <div>
     <Header/>
   </div>

   <div> 
   <div>
      
       <div>
    <TitlePage title="ZoneAdmin" classStyle="titlePage"/></div>
  </div>
  
      {role === "admin" ?(
      <main>
        <Outlet /> {/* Rend les routes enfants ici */}
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

import { Outlet } from 'react-router';
import TitlePage from '../../Componement/TitlePage/TitlePage';
import NavMenu from '../../Componement/NavMenu/NavMenu';
import './Default.css';
export default function DefaultLayout() {
  return (
    <div  className = "main_layout">
      
      <div className='barre_layout'> 
        <TitlePage title="Massa Anthony  creation solution web" classStyle="title_layout"/>
         </div>

    <div>
    <div>
     <NavMenu/>
   </div>
   <div>
      <main>
        <Outlet /> {/* Rend les routes enfants ici */}
      </main>      
    </div>
    </div>
      </div>
  );
}

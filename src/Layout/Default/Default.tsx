import { Outlet } from 'react-router';
import TitlePage from '../../Componement/TitlePage/TitlePage';
import Header from '../../Componement/Header/Header';
import './Default.css';
export default function DefaultLayout() {
  return (
    <div  className = "main_layout">
      <div className='barre_layout'> 
        <TitlePage title="Massa Anthony  creation solution web" classStyle="title_layout"/>
         </div>
    <div  style = {{ display: 'flex' }}>

    <div>
     <Header/>
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

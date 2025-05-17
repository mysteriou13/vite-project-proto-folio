import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css';
export default function Layout() {
  return (
    <div  className = "main_layout">
      <div className='barre_header'> barre header </div>
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

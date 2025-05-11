import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

export default function Layout() {
  return (
    <div style = {{ display: 'flex' }}>

    <div>
     <Header/>
   </div>
   <div>
      <main>
        <Outlet /> {/* Rend les routes enfants ici */}
      </main>      
    </div>
      </div>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

export default function Layout() {
  return (
    <div>
     <Header/>
      <main>
        <Outlet /> {/* Rend les routes enfants ici */}
      </main>      

      </div>
  );
}

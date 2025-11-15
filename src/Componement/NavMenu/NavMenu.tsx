import { useState, useEffect, Key } from 'react';
import { useAuth } from '../../Store/Selector/SelectorUser';
import { useGetNavMenuQuery } from '../../Store/api/ApiNavMenu';
import { LinkNav } from '../../Interface/InterfaceNavmenu';
import NavMenuUtilise from "../../Utilis/NavMenuUtilise"
import { useDispatch } from 'react-redux';
import { navSelector } from '../../Store/Selector/SelectorNavMenu';
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu';
import './NavMenu.css';

export default function NavMenu() {

  const dispatch = useDispatch();

  const { login, role } = useAuth();
  const {linknav} = navSelector()
  const {readNavLink} = NavMenuUtilise()
  const { data, isLoading, error } = useGetNavMenuQuery();

  useEffect(() => {
  
     readNavLink()

  }, [data, login, role, dispatch]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div className="box_header">
      <nav>
        <ul className="ul_box">
          {linknav.data.map((link: { _id: Key | null | undefined; name: string; address: string; }) => (
            <li key={link._id}>
              <LinkNavMenu name={link.name} address={link.address} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

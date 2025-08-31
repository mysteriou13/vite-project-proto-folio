import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../Store/hook';
import { readNavMenu } from '../../Store/Thunks/thunksNavMenu';
import { useAuth } from '../../Store/Selector/SelectorUser';
import { navSelector } from '../../Store/Selector/SelectorNavMenu';
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu';
import type { LinkNav,ItemsState } from '../../Interface/InterfaceNavmenu';
import './NavMenu.css';

export default function NavMenu() {
  // Type des liens de navigation
 

  const dispatch = useAppDispatch();
  const { login, role } = useAuth();
  const { items } = navSelector() as  object as { items: ItemsState }; // préciser la structure de items
  const [filtreitem, setfilteritem] = useState<LinkNav[]>([]);

  // Charger les données au montage
  useEffect(() => {
    dispatch(readNavMenu());
  }, [dispatch]);

  // Filtrer les liens en fonction du rôle et de l'état de connexion
  useEffect(() => {
    if (!items || !Array.isArray(items.data)) return;

    let filtered: LinkNav[] = [];

    if (!login) {
      filtered = items.data.filter(
        (link) =>
          link.typelink === 'default' || link.typelink === 'invisibleuserconnect'
      );
    } else if (role === 'user') {
      filtered = items.data.filter((link) => link.typelink === 'default');
    } else if (role === 'admin') {
      filtered = items.data.filter(
        (link) =>
          link.typelink === 'default' || link.typelink === 'visibleadminconnect'
      );
    }

    setfilteritem(filtered);
  }, [items, login, role]);

  return (
    <div className="box_header">
      <nav>
        <ul className="ul_box">
          {filtreitem.map((link) => (
            <li key={link._id}>
              <LinkNavMenu data={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

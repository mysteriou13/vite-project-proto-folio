import { useState, useEffect } from 'react';
import { useAuth } from '../../Store/Selector/SelectorUser';
import { useGetNavMenuQuery } from '../../Store/api/ApiNavMenu';
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu';
import  {LinkNav}  from '../../Interface/InterfaceNavmenu';
import './NavMenu.css';

export default function NavMenu() {
  const { login, role } = useAuth();
  const { data, isLoading, error } = useGetNavMenuQuery();
const [filtreitem, setFilterItem] = useState<LinkNav[]>([]);

/**/
useEffect(() => {
  if (!data?.data) return;

  let filtered: LinkNav[] = [];

  if (!login) {
    filtered = data.data.filter(
      (link) =>
        link.typelink === "default" ||
        link.typelink === "invisibleuserconnect"
    );
  } else if (role === "user") {
    filtered = data.data.filter((link) => link.typelink === "default");
  } else if (role === "admin") {
    filtered = data.data.filter(
      (link) =>
        link.typelink === "default" ||
        link.typelink === "visibleadminconnect"
    );
  }

  // 
  setFilterItem(filtered);
}, [data, login, role]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div className="box_header">
      <nav>
        <ul className="ul_box">
          {filtreitem.map((link) => (
            <li key={link._id}>
              <LinkNavMenu name={link.name} address={link.address} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

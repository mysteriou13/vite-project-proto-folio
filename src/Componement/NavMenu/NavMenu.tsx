import { useState, useEffect } from 'react';
import { useAuth } from '../../Store/Selector/SelectorUser';
import { useGetNavMenuQuery } from '../../Store/api/ApiNavMenu';
import  {LinkNav}  from '../../Interface/InterfaceNavmenu';
import { setNav } from '../../Store/Slice/NavSlice';
import { useDispatch } from 'react-redux';
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu';
import './NavMenu.css';

export default function NavMenu() {
  let dispacth =  useDispatch();
  const { login, role } = useAuth();
  const { data, isLoading, error } = useGetNavMenuQuery();
 
const [filtreitem, setFilterItem] = useState<LinkNav[]>([]);

/*nav menu*/
useEffect(() => {

dispacth(setNav(data))

  if (!data?.data) return;

  let filtered: LinkNav[] = [];

  if (!login) {
    filtered = data.data.filter(
      (link:any) =>
        link.typelink === "default" ||
        link.typelink === "invisibleuserconnect"
    );
  } else if (role === "user") {
    filtered = data.data.filter((link:any) => link.typelink === "default");
  } else if (role === "admin") {
    filtered = data.data.filter(
      (link:any) =>
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
              <LinkNavMenu name={link.name} address={link.address}   />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

import { readNavMenu } from '../../Store/Thunks/thunksNavMenu' 
import { useAppDispatch} from '../../Store/hook' 
import { useAuth } from '../../Store/Selector/SelectorUser'
import { navSelector } from '../../Store/Selector/SelectorNavMenu'
import LinkNavMenu from '../LinkNavMenu/LinkNavMenu'
import { useEffect, useState } from 'react'
import "./NavMenu.css"

export default function NavMenu() {
  type LinkNav= {
    _id: string;
    name: string;
    address: string;
    typelink: string;
  }

  const dispatch = useAppDispatch();
  const { isLoggedIn, role } = useAuth();
  const { items } = navSelector();
  const [filtreitem, setfilteritem] = useState<LinkNav[]>([]);

  // load data navlink
  useEffect(() => {
    dispatch(readNavMenu());
  }, [dispatch]);

  //Filter navlinks by status and role
  useEffect(() => {
    if (!Array.isArray(items.data)) return;

    let filtered: LinkNav[] = [];

    if (!isLoggedIn) {
      filtered = items.data.filter(
        (link: { typelink: string }) =>
          link.typelink === "default" || link.typelink === "invisibleuserconnect"
      );
    } else if (role === "user") {
      filtered = items.data.filter((link:{typelink:string}) => link.typelink === "default");
    } else if (role === "admin") {
      filtered = items.data.filter(
        (link: { typelink: string }) =>
          link.typelink === "default" || link.typelink === "visibleadminconnect"
      );
    }

    setfilteritem(filtered);
  }, [items, isLoggedIn, role]);

  return (
    <div className="box_header">
      <nav>
        <ul className="ul_box">
          {filtreitem.map((link: LinkNav) => (
            <LinkNavMenu data={link} key={link._id} />
          ))}
        </ul>
      </nav>
    </div>
  );
}


import { useAuth } from "../Store/Selector/SelectorUser";
import { useApiData } from "./CallApi";
import { useDispatch } from "react-redux";
import { setNav } from "../Store/Slice/NavSlice";
import { LinkNav } from "../Interface/InterfaceNavmenu";

export default function NavMenuHook() {

const {login,role} = useAuth();
const {handleRequest} = useApiData()
const dispatch = useDispatch()

/*display nav link in the header*/
const readNavLink = async ()=>{

let data =  await handleRequest("/navmenu/readnavmenu","GET")

    let filtered: LinkNav[] = [];

    if (!data) return; 

    if (!login) {
      filtered = data.data.filter(
        (link: { typelink: string; }) =>
          link.typelink === "default" ||
          link.typelink === "invisibleuserconnect"
      );
    } else if (role === "user") {
      filtered = data.data.filter((link: { typelink: string; }) => link.typelink === "default");
    } else if (role === "admin") {
      filtered = data.data.filter(
        (link: { typelink: string; }) =>
          link.typelink === "default" ||
          link.typelink === "visibleadminconnect"
      );
    }

  
 dispatch(setNav({ data: filtered }));


}

 const AdminNavlink = async ()=>{

 }

 return  {readNavLink}


}

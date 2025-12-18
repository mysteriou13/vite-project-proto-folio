import { useAuth } from "../Store/Selector/SelectorUser";
import { useApiData } from "./CallApi";
import { useDispatch } from "react-redux";
import { setNav } from "../Store/Slice/NavSlice";
import { LinkNav } from "../Interface/InterfaceNavmenu";

export default function NavMenuHook() {
  let datatoken = localStorage.getItem("token") || null;
  let datarole = localStorage.getItem("role");
  console.log("datarole", datarole);
  const { handleRequest } = useApiData();
  const dispatch = useDispatch();

  /*display nav link in the header*/
  const readNavLink = async () => {
    let data = await handleRequest("/navmenu/readnavmenu", "GET");

    let filtered: LinkNav[] = [];

   console.log('data toke, role', datatoken);

    if (!data) return;

    if (!datatoken) {
      filtered = data.data.filter(
        (link: { typelink: string }) =>
          link.typelink === "default" ||
          link.typelink === "invisibleuserconnect"
      );
    } else if (datarole === "user") {
      filtered = data.data.filter(
        (link: { typelink: string }) => link.typelink === "default"
      );
    } else if (datarole === "admin") {
      filtered = data.data.filter(
        (link: { typelink: string }) =>
          link.typelink === "default" || link.typelink === "visibleadminconnect"
      );
    }
    dispatch(setNav({ data: filtered }));
  };

  return { readNavLink };
}

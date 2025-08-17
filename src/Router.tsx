
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./Layout/Default/Default.jsx";
import DisconnectLayout from "./Layout/Disconnect/DisconnectionLayout.tsx";
import ZoneAdmin from "./Layout/Admin/ZoneAdmin/ZoneAdmin.tsx";
import Home from './Page/Home/Home.jsx';
import Contact from './Page/Contact/Contact.jsx'; // Exemple de page
import Project from './Page/Project/Project.jsx'; // Exemple de page
import Inscription from "./Page/Inscription/Inscription.tsx";
import Connection from "./Page/Connection/Connection.tsx";
import AddNavMenu from "./Page/PageAdmin/AddNavMenu/AddNavMenu.tsx";
import AdminNavMenu from "./Layout/Admin/LayoutAdminNavMenu/AdminNavMenu.tsx";
export default function Router() {

  
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout englobant toutes les pages */}
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<Home />} /> {/* Page par défaut */}
          <Route path="project" element={<Project />} /> {/* Page About */}
          <Route path="contact" element={<Contact />} /> {/* Page Contact */}
        </Route>

        <Route path  = "/" element = {<DisconnectLayout/>}>

        <Route path ="inscription" element = {<Inscription/>}/>
        <Route path = "connection" element = {<Connection/>}/>

        </Route>

       <Route path="/admin" element={<ZoneAdmin />}>
  <Route path="adminNavMenu" element={<AdminNavMenu />} />
  <Route path="addNavMenu" element={<AddNavMenu />} />
      </Route>



      </Routes>
    </BrowserRouter>
  );
}

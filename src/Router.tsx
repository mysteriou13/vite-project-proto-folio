import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./Layout/Default/Default.jsx";
import ZoneAdmin from "./Layout/Admin/ZoneAdmin/ZoneAdmin.tsx";
import LayoutAdminProject from "./Layout/Admin/LayoutAdmiProject/LayoutAdminProject.tsx";
import Home from "./Page/Home/Home.jsx";
import HomeAdmin from "./Page/PageAdmin/HomeAdmin/HomeAdmin.tsx";
import ListeProjectAdmin from "./Page/PageAdmin/ListeProjectAdmin/ListeProjectAdmin.tsx";
import AdminListeProjectAdmin from "./Page/PageAdmin/AdminListeProjectAdmin/AdminListeProjectAdmin.tsx";
import AdminAddproject from "./Page/PageAdmin/AdminAddproject/AdminAddproject.tsx";
import FromContact from "./Componement/From/Contact/FromContact.tsx";
import Project from "./Page/Project/Project.jsx";
import FormInscription from "./Componement/From/User/Inscription/FromInscription.tsx";
import FormConnection from "./Componement/From/User/Connection/FromConnection.tsx";
import AddNavMenu from "./Page/PageAdmin/AddNavMenu/AddNavMenu.tsx";
import AdminNavMenu from "./Layout/Admin/LayoutAdminNavMenu/AdminNavMenu.tsx";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout englobant toutes les pages */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} /> {/* Page par défaut */}
          <Route path="project" element={<Project />} /> {/* Page About */}
          <Route path="contact" element={<FromContact />} />
          <Route path="inscription" element={<FormInscription />} />
          <Route path="connection" element={<FormConnection />} />
        </Route>

        <Route path="/admin" element={<HomeAdmin />} />

        <Route path="/admin" element={<ZoneAdmin />}>
          <Route path="adminNavMenu" element={<AdminNavMenu />} />
          <Route path="addNavMenu" element={<AddNavMenu />} />

          <Route path="/admin/project" element={<LayoutAdminProject />}>
            <Route path="ListeAdminProject" element={<ListeProjectAdmin />} />
            <Route path="AdminProject" element={<AdminListeProjectAdmin />} />
            <Route path="addproject" element={<AdminAddproject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

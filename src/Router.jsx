
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Page/Home/Home.jsx';
import Contact from './Page/Contact/Contact.jsx'; // Exemple de page
import Project from './Page/Project/Project.jsx'; // Exemple de page
import Inscription from "./Page/Inscription/Inscription.tsx";
import Connection from "./Page/Connection/Connection.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout englobant toutes les pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Page par défaut */}
          <Route path="project" element={<Project />} /> {/* Page About */}
          <Route path="contact" element={<Contact />} /> {/* Page Contact */}
          <Route path ="inscription" element = {<Inscription/>}/>
          <Route path = "connection" element = {<Connection/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

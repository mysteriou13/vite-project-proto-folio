import { useState } from "react";
import type { NavDataLink } from "../../../../Interface/InterfaceNavmenu";
import FromBase from "../../FromBase/FromBase";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import { useAuth } from "../../../../Store/Selector/SelectorUser";
import "./FromLinkNavMenu.css"
interface FormAddNavMenuProps {
    NavLink: (args: { dataform: NavDataLink; token: string }) => Promise<any>
   title:string,
  }
export default function FormLinkNavMenu({NavLink,title}:FormAddNavMenuProps) {
    const { token } = useAuth();

  const [dataform, setDataform] = useState<NavDataLink>({
    name: "",
    address: "",
    typelink: "default",
   
  });

  //  Correction ici : accepte input + textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDataform({
      ...dataform,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!dataform.name || !dataform.address) {
      console.log("⚠️ Remplir tous les champs obligatoires !");
      return;
    }
  
   
    await NavLink({ dataform, token })
   
    // Reset du formulaire
    setDataform({
      name: "",
      address: "",
      typelink: "default",
    });
  };

  // Tableau dynamique pour tous les champs
  const tapinput: inputInterface[] = [
    {
      label: "Nom du lien",
      name: "name",
      type: "text",
      value: dataform.name,
      onChange: handleChange,
    },
    {
      label: "Adresse du lien",
      name: "address",
      type: "text",
      value: dataform.address,
      onChange: handleChange,
    },
    {
      label: "Type du lien",
      name: "typelink",
      type: "radio",
      value: dataform.typelink,
      onChange: handleChange,
      options: [
        { label: "Défaut", value: "default" },
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
        { label: "Visible User connecté", value: "visibleuserconnecter" },
        { label: "Invisible User", value: "invisibleuserconnect" },
        { label: "Visible Admin connecté", value: "visibleadminconnect" },
      ],
    },
  ];

  return (
    <div>
      <FromBase submit={handleSubmit} tapinput={tapinput} title={title} />
    </div>
  );
}

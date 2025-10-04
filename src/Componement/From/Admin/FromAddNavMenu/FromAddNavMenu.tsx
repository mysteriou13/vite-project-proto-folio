import { useState } from "react";
import "./FromAddNavMenu.css";
import { useAddNavLinkMutation } from "../../../../Store/api/ApiNavMenu";
import type { NavDataLink } from "../../../../Interface/InterfaceNavmenu";
import FromBase from "../../FromBase/FromBase";
import { inputInterface } from "../../../../Interface/InterfaceInput";

export default function FormAddNavMenu() {
  const [addNavLink] = useAddNavLinkMutation();

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

    await addNavLink(dataform).unwrap();

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
      <h1>Ajouter un lien au menu de navigation</h1>
      <FromBase submit={handleSubmit} tapinput={tapinput} title={""} />
    </div>
  );
}

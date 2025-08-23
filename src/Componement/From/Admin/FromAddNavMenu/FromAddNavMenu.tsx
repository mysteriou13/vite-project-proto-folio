import { useState } from "react";
import  "./FromAddNavMenu.css"
import { useAppDispatch } from "../../../../Store/hook";
import { addNavMenu } from "../../../../Store/Thunks/thunksNavMenu";
import type { NavDataLink } from "../../../../Interface/InterfaceNavmenu";

export default function FormAddNavMenu() {
  const dispatch = useAppDispatch();

  // useState pour gérer le formulaire
  const [dataform, setDataform] = useState<NavDataLink>({
    name: "",
    address: "",
    typelink: "default",
  });

  // Gérer les changements de champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDataform({
      ...dataform,
      [name]: value,
    });
  };

  // Gérer la soumission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation basique
    if (!dataform.name || !dataform.address) {
      console.log("⚠️ Remplir tous les champs obligatoires !");
      return;
    }

    // Envoi au backend via Redux Thunk
    dispatch(addNavMenu(dataform));

    // Reset du formulaire
    setDataform({
      name: "",
      address: "",
      typelink: "default",
    });
  };

  return (
    <div>
    <h1>Ajouter un lien au menu de navigation</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom du lien"
        value={dataform.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Adresse du lien"
        value={dataform.address}
        onChange={handleChange}
      />

      <div className="divinputRadionAddNavMenu">
        <label>
          Défaut
          <input
            type="radio"
            name="typelink"
            value="default"
            checked={dataform.typelink === "default"}
            onChange={handleChange}
          />
        </label>
        <label>
          User
          <input
            type="radio"
            name="typelink"
            value="user"
            checked={dataform.typelink === "user"}
            onChange={handleChange}
          />
        </label>
        <label>
          Admin
          <input
            type="radio"
            name="typelink"
            value="admin"
            checked={dataform.typelink === "admin"}
            onChange={handleChange}
          />
        </label>
        <label>
          Visible User connecté
          <input
            type="radio"
            name="typelink"
            value="visibleuserconnecter"
            checked={dataform.typelink === "visibleuserconnecter"}
            onChange={handleChange}
          />
        </label>
        <label>
          Invisible User
          <input
            type="radio"
            name="typelink"
            value="invisibleuserconnect"
            checked={dataform.typelink === "invisibleuserconnect"}
            onChange={handleChange}
          />
        </label>
        <label>
          Visible Admin connecté
          <input
            type="radio"
            name="typelink"
            value="visibleadminconnect"
            checked={dataform.typelink === "visibleadminconnect"}
            onChange={handleChange}
          />
        </label>
      </div>


      <button type="submit"> Ajouter</button>
    </form>
    </div>
  );
}
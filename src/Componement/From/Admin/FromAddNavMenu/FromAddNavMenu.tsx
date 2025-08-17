import { useState } from "react";
import { useAppDispatch } from "../../../../Store/hook";
import { addNavMenu } from "../../../../Store/Thunks/thinksNavMenu";
import type { FormData } from '../../../../Interface/InterfaceNavmenu';

export default function FormAddNavMenu() {
  const dispatch = useAppDispatch()
  // useState pour un seul formulaire
  const [dataform, setDataform] = useState<FormData>({
    name: "",
    address: "",
    typelink: "default"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataform({
      ...dataform,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(Object.values(dataform).some((v) => v === "")){
      console.log("error remplir tout les champs")
    }else{
      
  dispatch(addNavMenu(dataform));  


    }

    console.log("Données du formulaire :", dataform);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={dataform.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={dataform.address}
        onChange={handleChange}
      />
      <div>
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
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

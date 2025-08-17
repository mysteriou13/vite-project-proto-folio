import { useState } from "react";

type FormData = {
  name: string;
  address: string;
  typelink: "default" | "user" | "admin" | "";
};

export default function FormAddNavMenu() {
  // useState pour un seul formulaire
  const [dataform, setDataform] = useState<FormData>({
    name: "",
    address: "",
    typelink: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataform({
      ...dataform,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

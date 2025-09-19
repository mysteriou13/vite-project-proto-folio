import { useState } from "react";
import FromSing from "../../FromSing/FromSing";
import { useInscriptionUserMutation } from "../../../../Store/api/ApiUser";
import "./FromInscription.css";
import { inputInterface } from "../../../../Interface/InterfaceInput";

export default function FormInscription() {
  
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role] = useState<string>("user");
  const [inscriptionUser] = useInscriptionUserMutation();

  const inscription = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await inscriptionUser({ name, password, role });
    if (result) {
      console.log("Utilisateur inscrit :", result);
    }
  };

  // ✅ tableau de config pour générer les inputs
  let tapinput:inputInterface[] = [
    {
      label: "Nom",
      name: "name",
      type: "text",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    },
    {
      label: "Mot de passe",
      name: "password",
      type: "password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  return (
    <div>
  <FromSing  submit={inscription}tapinput={tapinput} title="Inscription"/>
    </div>
  );
}

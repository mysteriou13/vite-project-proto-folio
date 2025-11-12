import { useState } from "react";
import "./FromInscription.css";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import FromBase from "../../FromBase/FromBase";
import { User } from "../../../../Utilis/UserUtilis";

export default function FormInscription() {
  
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {InscriptionUser} = User()

 

  // ✅ tableau de config pour générer les inputs
  let tapinput:inputInterface[] = [
    {
      label: "Nom",
      name: "name",
      type: "text",
      value: name,
      onChange:  (e) =>  setName(e.target.value),
    },
    {
      label: "Mot de passe",
      name: "password",
      type: "password",
      value: password,
      onChange:  (e) =>  setPassword(e.target.value),
    },
  ];

  return (
    <div className="divFromInscription">
  <FromBase  submit={(e)=>InscriptionUser(e,name,password,"user") }tapinput={tapinput} title="Inscription"/>
    </div>
  );
}

import { useState} from "react";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import FromBase from "../../FromBase/FromBase";
import { User } from "../../../../hooks/UserHook";
import "./FromConnection.css";

export default function FormConnection() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { LoginUser } = User();

  const tapinput: inputInterface[] = [
    {
      label: "Nom",
      name: "name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: "Mot de passe",
      name: "password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div>
      <div className="divFromConnection">
        
         <FromBase  tapinput={tapinput} title="connection" submit={(e) => LoginUser(e, name, password)} />
         
      </div>
    </div>
  );
} 

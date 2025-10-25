import { useState } from "react";
import { useAppDispatch } from "../../../../Store/Hook/hook";
import { setLogin,setToken,setRoleUser } from "../../../../Store/Slice/LoginSlice";
import { useLoginUserMutation } from "../../../../Store/api/ApiUser";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import FromBase from "../../FromBase/FromBase";
import { LoginResponse } from "../../../../Interface/interfaceUse";

import "./FromConnection.css";

export default function FormConnection() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const LoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result: LoginResponse = await loginUser({ name, password }).unwrap();

      if (result.connection) {
        dispatch(setLogin(true));
        dispatch(setRoleUser(result.role));
         dispatch(setToken(result.token));
      }
    } catch (error) {
      console.error("Erreur de connexion", error);
    }
  };

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
        <FromBase  tapinput={tapinput} title="connection" submit={LoginSubmit} />
      </div>
    </div>
  );
}

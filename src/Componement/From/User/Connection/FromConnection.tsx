import { useState } from "react";
import {useAppDispatch} from '../../../../Store/hook'
import { setLogin,setRoleUser } from "../../../../Store/Slice/LoginSlice";
import { useLoginUserMutation } from "../../../../Store/api/ApiUser";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import FromSing from "../../FromSing/FromSing";

import "./FromConnection.css";

export default function FormConnection() {
 const [name, setName] = useState<string>("")
const [password, setPassword] = useState<string>("")
const [role, _setRole] = useState<string>("admin")
const [loginUser, {isLoading,error}] = useLoginUserMutation();
const dispatch = useAppDispatch();
const LoginSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
   const result = await loginUser({ name, password }).unwrap()
   
   if(result){
    dispatch(setLogin(true))
    dispatch(setRoleUser(role))
       
   }

  }catch(error){

  }

}

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

     <FromSing submit={LoginSubmit} tapinput={tapinput} title="connection"/>

    </div>
  )
}

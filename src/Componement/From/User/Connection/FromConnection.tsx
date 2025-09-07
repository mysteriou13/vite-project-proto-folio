import { useState } from "react";
import {useAppDispatch} from '../../../../Store/hook'
import { setLogin,setRoleUser } from "../../../../Store/Slice/LoginSlice";
import { useLoginUserMutation } from "../../../../Store/api/ApiUser";

import "./FromConnection.css";

export default function FormConnection() {
 const [name, setName] = useState<string>("")
const [password, setPassword] = useState<string>("")
const [role, _setRole] = useState<string>("admin")
const [loginUser, {isLoading,error}] = useLoginUserMutation();
const dispatch = useAppDispatch();
const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <div>

      <form className = "fromConnection"onSubmit={handleSubmit}>
        <div className = "divMainConnection">
        <h1>Connexion</h1>
        <div className="boxInput">{}
          <label>Nom</label>
          <input
          className="ClassinputConnection"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="boxInput">
          <label>Mot de passe</label>
          <input
            className="ClassinputConnection"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Si tu utilises le rôle, ajoute un select ou input ici */}

        <div>
          <input type="submit" value="Se connecter" className="InputSubmitConnection" />
        </div>
        </div>
      </form>

    </div>
  )
}

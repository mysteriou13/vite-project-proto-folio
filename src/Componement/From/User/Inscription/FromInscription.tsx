import { useState } from "react"
import {useAppDispatch} from '../../../../Store/hook'
import { InscriptionUser } from "../../../../Store/Thunks/thunksUser";
import "./FromInscription.css"

export default function FormInscription() {

  const dispatch = useAppDispatch();

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [role, setRole] = useState<string>("admin")

    const inscription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // empêche le rechargement de la page
     
          dispatch(InscriptionUser({name,password}))
    
    }

    return (
        <div>
         <form className = "fromConnection"onSubmit={inscription}>
        <div className = "divMainConnection">
        <h1>Inscription</h1>
        <div className="boxInput">
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
          <input type="submit" value="envoyer" className="InputSubmitConnection" />
        </div>
        </div>
      </form>
        </div>
    )
}

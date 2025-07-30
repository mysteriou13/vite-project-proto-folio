import { useState } from "react"

import { useDispatch } from 'react-redux'
import { setLogin } from "../../../Store/Slice"

export default function FormConnection() {
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [role, setRole] = useState<string>("admin") // Si tu en as besoin
  
  const dispatch = useDispatch();

  const connection = async (e: React.FormEvent) => {
     e.preventDefault() // empêche le rechargement de la page

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: "POST", // méthode POST obligatoire pour login
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, role }),
      })

     const data = await response.json();      
    
     console.log(data);

     if(data.token){

      dispatch(setLogin(true))
      console.log("token connection");

     }else{
      dispatch(setLogin(true))
     }

      // Ici tu peux gérer la réponse (ex : sauvegarder token, rediriger, etc.)
    } catch (error) {
      console.error("Erreur lors de la connexion :", error)
    }
  }

  return (
    <div>
      <form onSubmit={connection}>
        <h1>Connexion</h1>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Si tu utilises le rôle, ajoute un select ou input ici */}

        <div>
          <input type="submit" value="Se connecter" />
        </div>
      </form>
    </div>
  )
}

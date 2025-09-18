import { SetStateAction, useState } from "react";
import { useAppDispatch } from "../../../../Store/hook";
import Input from "../../../input/Input";
import { useInscriptionUserMutation } from "../../../../Store/api/ApiUser";
import "./FromInscription.css";

export default function FormInscription() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, _setRole] = useState<string>("user");
  const [inscriptionUser] = useInscriptionUserMutation();

  const inscription = async (e: React.FormEvent) => {
    e.preventDefault(); // empêche le rechargement de la page

    const result = await inscriptionUser({ name, password, role });
    if (result) {
      console.log("Utilisateur inscrit :", result);
    }
  };

  return (
    <div>
      <form className="fromConnection" onSubmit={inscription}>
        <div className="divMainConnection">
          <h1>Inscription</h1>

          <Input
            label="Nom"
            name="name" // attribut name
            type="text"
            value={name} // ⚡ lié au state
            onChange={(e) => setName(e.target.value)} // ⚡ met à jour le state
          />

          <Input
            label="Mot de passe"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <input
              type="submit"
              value="Envoyer"
              className="InputSubmitConnection"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

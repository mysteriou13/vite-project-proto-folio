import { useState } from "react";
import { useAppDispatch } from "../../../../Store/hook";
import Input from "../../../input/Input";
import { useInscriptionUserMutation } from "../../../../Store/api/ApiUser";
import "./FromInscription.css";

export default function FormInscription() {
  const dispatch = useAppDispatch();

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
  const tapinput = [
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
      <form className="fromConnection" onSubmit={inscription}>
        <div className="divMainConnection">
          <h1>Inscription</h1>

          {tapinput.map((field, index) => (
            <Input
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              value={field.value}
              onChange={field.onChange}
            />
          ))}

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

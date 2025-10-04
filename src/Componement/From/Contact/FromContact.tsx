import { SetStateAction, useState } from "react";
import FromSing from "../FromBase/FromBase";
import { inputInterface } from "../../../Interface/InterfaceInput";
import { useContactMutation } from "../../../Store/api/ApiContact";
import "./FromContact.css";

export default function FromContact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [Contact] = useContactMutation();

   

  let tapinput: inputInterface[] = [
    {
      label: "Nom",
      name: "name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    // Pour un textarea, on pourrait créer un type spécial
    {
      label: "Message",
      name: "message",
      type: "textarea",
      value: message,
   onChange: (e) => setMessage(e.target.value),
    },
  ];

  const sendcontact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
Contact({ name, email, message });
  };

  return (
    <div className="main_input_Contact">
      <FromSing submit={sendcontact} tapinput={tapinput} title={"Contact"} />
    </div>
  );
}

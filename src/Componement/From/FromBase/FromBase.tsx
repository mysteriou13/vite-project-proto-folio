import { FormEventHandler,FormEvent, useState } from "react";
import { inputInterface } from "../../../Interface/InterfaceInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ListeInput from "../ListeInput/ListeInput";

interface FromBaseProps {
  submit:FormEventHandler<HTMLFormElement>
  tapinput: inputInterface[];
  title: string;
  
}

export default function FromBase({ submit, tapinput, title }: FromBaseProps) {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // empêcher le rechargement de page
    setShowSpinner(true);        // afficher le spinner

    setTimeout(() => {
      setShowSpinner(false);     // cacher le spinner après 3s
      submit(e);                 // appeler la vraie fonction submit
    }, 500);
  };

  return (
    <div>
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <form className="fromConnection" onSubmit={handleSubmit}>
          <div className="divMainConnection">
            <h1>{title}</h1>
            <ListeInput tapinput={tapinput} />
            <div>
              <input type="submit" value="Envoyer" className="InputSubmitConnection" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

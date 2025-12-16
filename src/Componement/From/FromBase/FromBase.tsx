import { FormEventHandler,FormEvent, useState } from "react";
import { inputInterface } from "../../../Interface/InterfaceInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ListeInput from "../ListeInput/ListeInput";
import "./FromBase.css"
interface FromBaseProps {
  submit:(e: FormEvent<HTMLFormElement>) => Promise<void>
  tapinput: inputInterface[];
  title: string;
  
}

export default function FromBase({ submit, tapinput, title }: FromBaseProps) {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // empêcher le rechargement de page
    setShowSpinner(true);        // afficher le spinner

    try {
      await submit(e);           // attendre la fonction submit
    } finally {
      setShowSpinner(false);     // cacher le spinner après
    }
  };

  return (
    <div>
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <form className="fromBase" onSubmit={handleSubmit}>
          <div className="divMainBase">
            <h1>{title}</h1>
            <ListeInput tapinput={tapinput} />
            <div>
              <input type="submit" value="Envoyer" className="InputSubmitBase" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

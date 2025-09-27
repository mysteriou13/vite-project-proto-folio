import { FormEventHandler } from "react";
import { inputInterface } from "../../../Interface/InterfaceInput";
interface FromSingProps {
  submit: FormEventHandler<HTMLFormElement>;
  tapinput: inputInterface[];
  title: string;
}
import ListeInput from "../ListeInput/ListeInput";
export default function FromSing({ submit, tapinput, title }: FromSingProps ) {
  return (
    <div>
    <form className="fromConnection" onSubmit={submit}>
            <div className="divMainConnection">
              <h1>{title}</h1>
    
              <ListeInput tapinput={tapinput}/>
    
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
  )
}

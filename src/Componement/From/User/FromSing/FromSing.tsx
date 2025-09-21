import { FormEventHandler } from "react";
import Input from "../../input/Input";
import { inputInterface } from "../../../Interface/InterfaceInput";

interface FromSingProps {
  submit: FormEventHandler<HTMLFormElement>;
  tapinput: inputInterface[];
  title: string;
}

export default function FromSing({ submit, tapinput, title }: FromSingProps ) {
  return (
    <div>
    <form className="fromConnection" onSubmit={submit}>
            <div className="divMainConnection">
              <h1>{title}</h1>
    
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
  )
}

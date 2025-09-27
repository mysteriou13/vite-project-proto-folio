import TextArea from "../TextArea/TextArea"
import Input from "../../input/Input"
import { inputInterface } from "../../../Interface/InterfaceInput"

interface ListeInput {
    tapinput:inputInterface[]
}
/*liste input in form*/
export default function ListeInput({tapinput}:ListeInput) {
  return (
    <div>
        {tapinput.map((field, index) => (
              field.type === "textarea" ?(
      <div key={index} className="boxInput">
          <label>{field.label}</label>
          <TextArea name={field.name} value={field.value} onChange={field.onChange as any}/>
      </div>
              
              ):(
                <Input
                  key={index}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={field.value}
                  onChange={field.onChange}
                />
              )
              ))}
    </div>
  )
}

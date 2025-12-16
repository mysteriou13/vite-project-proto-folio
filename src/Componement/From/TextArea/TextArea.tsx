import { TextAreaProps } from "../../../Interface/InterfaceInput"

export default function TextArea({name,value,onChange}:TextAreaProps) {
  return (
    <div>
        {name} <textarea className="textarea"
           name={name}
           value={value}
           onChange={onChange} // caster pour TS
           required
          />
    </div>
  )
}

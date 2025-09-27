import { TextAreaProps } from "../../../Interface/InterfaceInput"

export default function TextArea({name,value,onChange}:TextAreaProps) {
  return (
    <div>
         <textarea
           name={name}
           value={value}
           onChange={onChange} // caster pour TS
           required
          />
    </div>
  )
}

import TextArea from "../TextArea/TextArea"
import Input from "../input/Input"
import InputRadio from "../InputRadio/InputRadio"
import { inputInterface } from "../../../Interface/InterfaceInput"
 import "./ListeInput.css";
interface ListeInputProps {
  tapinput: inputInterface[]
}

/* ListeInput of filed*/
export default function ListeInput({ tapinput }: ListeInputProps) {
  console.log("listeinput",tapinput);
  return (
    <div>
     {tapinput.map((field, index) => {
  if (field.type === "textarea") {
    return (
      <TextArea
        key={index}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      />
    );
  } else if (field.type === "radio") {
    return (
      <div key={index}>
        {field.options?.map((option, i) => (
          <InputRadio
            key={i}
            label={option.label}
            name={field.name}
            value={option.value}
            selectedValue={field.value}
            onChange={field.onChange} // TypeScript sait que c'est RadioInput
          />
        ))}
      </div>
    );
  } else {
    // field.type === "text"
    return (
      <Input
        key={index}
        label={field.label}
        name={field.name}
        type={field.type}
        value={field.value}
        onChange={field.onChange} // TypeScript sait que c'est TextInput
      />
    );
  }
})}

    </div>
  )
}

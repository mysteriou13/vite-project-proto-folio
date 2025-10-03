import TextArea from "../TextArea/TextArea"
import Input from "../../input/Input"
import InputRadio from "../InputRadio/InputRadio"
import { inputInterface } from "../../../Interface/InterfaceInput"

interface ListeInputProps {
  tapinput: inputInterface[]
}

/* ListeInput qui génère dynamiquement les bons champs */
export default function ListeInput({ tapinput }: ListeInputProps) {
  return (
    <div>
      {tapinput.map((field, index) => {
          if(field.type == "textarea"){
            return(
              <div key = {index} className="boxInput">
             <label>{field.label}</label>  
              
             <TextArea
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
              
              </div>
            )
          }else if(field.type === "radio" && field.options){
          
           return (
            <div key={index} className="boxInput">
              <label>{field.label}</label>
              {field.options.map((option,i)=>(
                
          <InputRadio label={option.label} name={option.name} value={field.value} checked={false} onChange={field.onChange} />

                 ))}
            </div>
          )
          }else{
              return(
      
            <Input label={field.label} name={field.name} type={field.type} value={field.value} onChange={field.onChange}/>
        
              )
          }
      })}
    </div>
  )
}

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
            <div key={index} className="ListInputRadio">
     
              {field.options.map((option,i)=>(
                
          <InputRadio 
          key ={i}
          label={option.label} 
          name={field.name} 
          value={field.value} 
          onChange={field.onChange} 
          selectedValue={field.value} />
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

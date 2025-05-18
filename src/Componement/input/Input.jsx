
import "./input.css"

export default function Input({data}) {

    const {title, typeinput, name,inputClass,labelinput,divinput} = data
  return (
    <div className={divinput}>

      <div className={labelinput}>
        <label> {title} </label> 
       </div> 

       <div>
        <input className={inputClass} type = {typeinput} name = {name} />
      </div>
    </div>
  )
}

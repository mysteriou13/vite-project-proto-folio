
import "./input.css"

export default function Input({data}) {

    const {title, typeinput, name} = data
  return (
    <div className="divinput">

        <label> {title} </label> <input type = {typeinput} name = {name} />

    </div>
  )
}

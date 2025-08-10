import  "./LinkAdmin.css";
import { useNavigate } from "react-router";


interface LinkAdmin{
     link:string;
     name:string
}

export default function LinkAdmin({link,name}:LinkAdmin) {
  let navigate = useNavigate();

    return (

    <div className="div_link_admin" onClick={()=> navigate(link)}> {name} </div>

)

}

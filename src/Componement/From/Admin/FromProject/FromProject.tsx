import { useState,useEffect, use } from "react"
import FromBase from "../../FromBase/FromBase"
import { inputInterface } from "../../../../Interface/InterfaceInput"
import { Project } from "../../../../hooks/ProjectHook"
import { set } from "mongoose";

export default function FromProject() {

  const [name, setName] = useState<string>("");
  const [descriptionproject, setdescriptionproject] = useState<string>("");
  const [textproject, settextproject] = useState<string>(""); 
  const [pictureproject, setpictureproject] = useState<File | null>(null);

  const [result,setResult] = useState<boolean>(false);
  
  function handleResultChange(newResult: boolean) {
    setResult(newResult);
  }

    const { submitProject} = Project(name,descriptionproject,textproject,pictureproject, handleResultChange);


  useEffect(() => {
    if (result) {
      setName("");
      setdescriptionproject("");
      settextproject("");
      setpictureproject(null);
      setResult(false);
    }
  }, [result]);

  /*function send result  child to parent*/


  const tapinput : inputInterface []= [
     {
      label: "name of project",
      name: "name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
    },

    {
      label: "description of project",
      name: "description of project",
      type: "textarea",
      value: descriptionproject,
      onChange: (e) => setdescriptionproject(e.target.value),
    },
      
    {
      label: " picture of project",
      name: "picture of project",
      type: "file",
      value: "", // For file inputs, value is not set
      onChange: (e) => setpictureproject(e.target.files?.[0] || null),
    },


     {
      label: "text of project",
      name: "text of project",
      type: "textarea",
      value: textproject,
      onChange: (e) => settextproject(e.target.value),
    },


  ]


  return (
    <div>
     {result && <p>✅ Projet ajouté</p>}
   <FromBase submit={submitProject} tapinput={tapinput} title={"Ajouter un projet"}
      
  
      />
    </div>
  )
}
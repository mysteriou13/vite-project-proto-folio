import { useState, useRef, useEffect } from "react"
import { FormEvent } from "react"
import FromBase from "../../FromBase/FromBase"
import { inputInterface } from "../../../../Interface/InterfaceInput"
import { useApiData } from "../../../../hooks/CallApi"

export default function FromProject() {
    let datatoken:string = localStorage.getItem("token") || "";
    const { handleRequest } = useApiData();
    const isMountedRef = useRef(true);

    useEffect(() => {
      return () => {
        isMountedRef.current = false;
      };
    }, []);

  const [name, setName] = useState<string>("");
  const [descriptionproject, setdescriptionproject] = useState<string>("");
  const [textproject, settextproject] = useState<string>(""); 
  const [pictureproject, setpictureproject] = useState<string>("");
  
async function submitProject(e:FormEvent<HTMLFormElement>){
  e.preventDefault();

  try {

     await handleRequest(
      "/project/add",
      "POST",
      datatoken,
      {
        title: name,
        description: descriptionproject,
        textproject: textproject,
        pictureproject: pictureproject
      }
    );
    // Reset form after successful submission
    if (isMountedRef.current) {
      setName("");
      setdescriptionproject("");
      settextproject("");
      setpictureproject("");
    }
    
  } catch(error) {
    console.error("Error adding project:", error);
  }
}

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
      value: pictureproject,
      onChange: (e) => setpictureproject(e.target.value),
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
 
   <FromBase submit={submitProject} tapinput={tapinput} title={"Ajouter un projet"}
      
  
      />
    </div>
  )
}
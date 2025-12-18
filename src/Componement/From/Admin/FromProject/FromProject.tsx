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
  const [pictureproject, setpictureproject] = useState<File | null>(null);
  
async function submitProject(e:FormEvent<HTMLFormElement>){
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('descriptionproject', descriptionproject);
    formData.append('textproject', textproject);
    if (pictureproject) {
      formData.append('imageproject', pictureproject);
    }

      const result = await handleRequest(
      "/project/add",
      "POST",
      datatoken,
      formData
    );

    console.log("Project added successfully:", result);

    // Reset form after successful submission
    
      setName("");
      setdescriptionproject("");
      settextproject("");
      setpictureproject(null);
    
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
 
   <FromBase submit={submitProject} tapinput={tapinput} title={"Ajouter un projet"}
      
  
      />
    </div>
  )
}
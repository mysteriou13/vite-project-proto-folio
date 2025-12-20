import { FormEvent } from "react";
import { useApiData } from "./CallApi"; 
import { data } from "react-router";

export function Project(name:string,
  descriptionproject:string,
  textproject:string,
  pictureproject:File | null,
  handleResultChange?: (newResult: boolean) => void) {

  let datatoken:string = localStorage.getItem("token") || "";
  const { handleRequest } = useApiData();

 async function submitProject(e:FormEvent<HTMLFormElement>){
  e.preventDefault();

  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('descriptionproject', descriptionproject);
    formData.append('textproject', textproject);

    if (pictureproject) {
      formData.append('imageproject', pictureproject);
    }
      let dataresult = await handleRequest(
      "/project/add",
      "POST",
      datatoken,
      formData
    );
    
handleResultChange && handleResultChange(dataresult.result);
}

return { submitProject };

}
function setName(arg0: string) {
  throw new Error("Function not implemented.");
}


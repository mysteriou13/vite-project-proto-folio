import { useState } from "react";
import  { NavDataLink } from "../../../../Interface/InterfaceNavmenu";
import FromBase from "../../FromBase/FromBase";
import { inputInterface } from "../../../../Interface/InterfaceInput";
import { useAuth } from "../../../../Store/Selector/SelectorUser";


interface FormAddNavMenuProps {

   NavLink: (args: { dataform: NavDataLink; token: string, }) => Promise<any>
   title:string,
   name:string,
   address:string,
   typelink:any,
   id:string
   datalink?: ( data: string) => void;

  }


export default function FormLinkNavMenu({NavLink,title,name,address,typelink,id,datalink}:FormAddNavMenuProps) {
    const { token } = useAuth();
const [dataform, setDataform] = useState<NavDataLink>({
  name: name,
  address: address,
  typelink: typelink, 
  id:id,
});



  //  Correction ici :  input + textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    
    const { name, value } = e.target;
    
    //datalink(value)
    setDataform({
      ...dataform,
      [name]: value,
    });
  
  };

const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value as NavDataLink["typelink"];
  setDataform((prev) => ({
    ...prev,
    typelink: value, // ✅ on met à jour directement dans dataform
  }));
};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    if (!dataform.name || !dataform.address) {
      console.log("⚠️ Remplir tous les champs obligatoires !");
      return;
    }
  
   
    await NavLink({ dataform, token })
    // Reset du formulaire

  };

  // Tableau dynamique pour tous les champs
  const tapinput: inputInterface[] = [
    {
      label: "Nom du lien",
      name: "name",
      type: "text",
      value: dataform.name,
      onChange: handleChange,
    },
    {
      label: "Adresse du lien",
      name: "address",
      type: "text",
      value: dataform.address,
      onChange: handleChange,
    },
{
  label: "Type du lien",
  name: "typelink",
  type: "radio",
  value: dataform.typelink,  // ✅ value = state
  onChange: handleRadioChange, // ✅ pas besoin de cast
  options: [
    { label: "Défaut", value: "default" },
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
    { label: "Visible User connecté", value: "visibleuserconnecter" },
    { label: "Invisible User", value: "invisibleuserconnect" },
    { label: "Visible Admin connecté", value: "visibleadminconnect" },
  ],
}
,
  ];

  return (
    <div>
      <FromBase submit={handleSubmit} tapinput={tapinput} title={title} />
    </div>
  );
}



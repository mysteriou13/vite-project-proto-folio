import React, { useState } from 'react'

import Input from '../../Componement/input/Input'
import TitlePage from '../../Componement/TitlePage/TitlePage'
import "./Contact.css"

export default function Contact() {
  
  const [tabInput, setTabInput] = useState(
    [
      {
        title:"nom",
        typeinput:"text",
        name:"nom",
        inputClass:"form_contact input",
        labelinput:"label_input_Contact",
        divinput:"div_input_Contact"
      },

      {
        title:"prenom",
        typeinput:"text",
        name:"prenom",
        inputClass:"form_contact input",
        labelinput:"label_input_Contact",
         divinput:"div_input_Contact"
      },

      {
        title:"email",
        typeinput:"email",
        name:"email",
        inputClass:"form_contact input",
        labelinput:"label_input_Contact",
         divinput:"div_input_Contact"
      },
  ]
  )

  function submit(event){

   

  }
  
  return (
<>
    <div className='main_input_Contact'>
      
       <TitlePage title="Contact" classStyle="titlePage"/>

      <div className='Container_contact'>

     <form onSubmit={submit} className='form_contact'>

    <div className='main_input_Contact'>
       {tabInput.map((data)=> <Input data={data} />

       )}
       </div>

     </form>

    </div>
    </div>
    </>
  )
}

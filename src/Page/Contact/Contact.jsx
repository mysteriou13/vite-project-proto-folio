import React, { useState } from 'react'

import Input from '../../input/input'

import "./Contact.css"

export default function Contact() {
  
  const [tabInput, setTabInput] = useState(
    [
      {
        title:"nom",
        typeinput:"text",
        name:"nom"
      },

      {
        title:"prenom",
        typeinput:"text",
        name:"prenom"
      },

      {
        title:"email",
        typeinput:"email",
        name:"email"
      },
  ]
  )

  function submit(event){

   

  }
  
  return (
    <div className='Container_contact'>
      
      Contact

     <form onSubmit={submit}>

       {tabInput.map((data)=> <Input data={data} />

       )}

     </form>

    </div>
  )
}

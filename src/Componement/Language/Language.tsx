import React from 'react'
import "./language.css"
export default function Language({language}) {
  let {name,level,img,description} = language;
  return (
    
    <div className='box_language'>
      <h2>{name}</h2>
       
      <div className='box_img'>
        <img  src =  {img} className='img'/>
      </div>
      <p>{description}</p>
       

      <input type = "range" value = {level}/>
      
    </div>
  )
}

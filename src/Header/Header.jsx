import React from 'react'

import "./style.css"

export default function header() {
  return (
    <div className = "box_header">
    
       <div>Anthony</div>

        <nav>
            <ul className='ul_box'>
                
                <li><a href="/acceuil">acceuil</a></li>
                <li><a href="/project"> project</a> </li>
                <li><a href = "/contact"> contact</a></li>

            </ul>
        </nav>


    </div>

  )
}

import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css"

export default function header() {
  return (
    <div className = "box_header">
    
       <div>Anthony</div>

        <nav>
            <ul className='ul_box'>
                
                <li><Link to="/">acceuil</Link></li>
                <li><Link to="/project"> project</Link> </li>
                <li><Link to = "/contact"> contact</Link></li>

            </ul>
        </nav>


    </div>

  )
}

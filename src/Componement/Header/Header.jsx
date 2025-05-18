
import {Link} from 'react-router-dom'
import "./Header.css"

export default function header() {
  return (
    <div className = "box_header">

        <nav>
            <ul className='ul_box'>
                
                <li><Link className='link_nav_header' to="/">acceuil</Link></li>
                <li><Link className='link_nav_header'to="/project"> project</Link> </li>
                <li><Link className='link_nav_header' to = "/contact"> contact</Link></li>

            </ul>
        </nav>


    </div>

  )
}

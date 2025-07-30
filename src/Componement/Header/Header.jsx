
import {Link} from 'react-router'
import "./Header.css"

export default function header() {
  return (
    <div className = "box_header">

        <nav>
            <ul className='ul_box'>
                
                <li><Link className='link_nav_header' to="/">acceuil</Link></li>
                <li><Link className='link_nav_header'to="/project"> project</Link> </li>
                <li><Link className='link_nav_header' to = "/contact"> contact</Link></li>
                <li><Link className='link_nav_header' to = '/inscription'>inscription</Link></li>
                <li><Link className='link_nav_header' to = '/connection'>connection</Link></li>

            </ul>
        </nav>


    </div>

  )
}

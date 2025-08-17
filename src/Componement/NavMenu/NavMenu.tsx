import { Link } from 'react-router'
import "./NavMenu.css"

import { useAuth } from '../../Store/Selector/SelectorUser'
export default function NavMenu() {

   const { isLoggedIn, role } = useAuth()


  return (
    <div className="box_header">
      <nav>
        <ul className='ul_box'>
          <li><Link className='link_nav_header' to="/">acceuil</Link></li>
          <li><Link className='link_nav_header' to="/project">project</Link></li>
          <li><Link className='link_nav_header' to="/contact">contact</Link></li>
          
          {role === "admin" &&(

            <>
             <li> <Link className='link_nav_header' to='/admin'>admin</Link>  </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li><Link className='link_nav_header' to='/inscription'>inscription</Link></li>
              <li><Link className='link_nav_header' to='/connection'>connection</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

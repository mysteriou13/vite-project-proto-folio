import { Outlet } from 'react-router'
import TitlePage from '../../Componement/TitlePage/TitlePage'
import Header from '../../Componement/Header/Header'
import { useSelector } from 'react-redux'
import type { RootState } from '../../Store/store'

import './DisconnectLayout.css'

export default function DisconnectLayout() {
let login = useSelector((state: RootState) => state.login.login)

  return (
    <div className="main_layout">
      <div className="barre_layout">
        <TitlePage title="Massa Anthony création solution web" classStyle="title_layout" />
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <main>
            
            {!login && <Outlet />}
          </main>
        </div>
      </div>
    </div>
  )
}

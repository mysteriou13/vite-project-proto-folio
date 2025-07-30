import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './Store/store'
import './index.css'

import Router from './Router'

createRoot(document.getElementById('root')).render(

<Provider store={store}>
    <Router />
    
  </Provider>

)

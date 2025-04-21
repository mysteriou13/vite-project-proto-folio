import React from 'react'
import AppRouter from '../Router';
import "./style.css"
import App from '../App';
export default function Main() {

  const language = [
    {
      id:1,
      name:"javascript",
      level: 30,
      img : "./js.png",
      description:"fjr frej fjeijif jr jifje ijef fi eojirfj ojferi jerfijefjefj iijferi jifj e",
    },
    
    {
      id:2,
      name:"html",
     level: 70,
     img : "./html.png",
     description:"fjr frej fjeijif jr jifje ijef fi  jerfijefjefj iijferi jifj e",
    },

    {
      id:3,
      name:"css",
     level: 60,
     img : "./css.png",
     description:"fjr frej fjeijif jr jifje ijef fi eojirfj ojferi jerfijefjefj iijferi jifj efjr frej fjeijif jr jifje ijef fi eojirfj ojferi jerfijefjefj iijferi jifj e",
    },
  ];

  return (
    <>
    <AppRouter/>
    <div className = 'main_box'> 
    
  
     </div>
     </>

  )
}

import { Link } from "react-router"
import "./LinkNavMenu.css"
import { useState } from "react"
export default function LinkNavMenu({data}) {
  const {name,address} = data;
  return (
    
    <Link className='link_nav_header' to={address}>{name}</Link>
    
  )
}

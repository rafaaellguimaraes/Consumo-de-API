import React from 'react'
import { Nav } from './styled'
import { Link } from 'react-router-dom'
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa'

//Declarando os tipos das variáveis
interface State {
  example: any
}

export default function Header() {
  return (
    <Nav>
      <Link to='/'><FaHome size={24}/></Link>
      <Link to='/register'><FaUserAlt size={24}/></Link>
      <Link to='/logout'><FaSignInAlt size={24}/></Link>
    </Nav>
  )
}

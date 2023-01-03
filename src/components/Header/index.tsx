import React from 'react'
import { Nav } from './styled'
import { Link } from 'react-router-dom'
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa'
import { useSelector } from 'react-redux'


//Declarando os tipos das variáveis
interface State {
  botaoClicado: boolean
  example: any
}

export default function Header() {
  //Com o useSelector conseguimos ler nosso state. state vai ser do tipo boolean e retorna o state.botaoClicado
  const botaoClicado = useSelector((state: State) => state.example.botaoClicado)
  return (
    <Nav>
      <Link to='/'><FaHome size={24}/></Link>
      <Link to='/login'><FaUserAlt size={24}/></Link>
      <Link to='/algumacoisa'><FaSignInAlt size={24}/></Link>
      {botaoClicado ? 'clicado' : 'não clicado'}
    </Nav>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import Usuario from '../pages/Usuario'
import Usuarios from '../pages/Usuarios'
import Register from '../pages/Register'

//De acordo com a rota, chama um componente específico
export default function RoutsApp() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/usuario/:id/edit' element={<Usuario/>} />
        <Route path='/usuario/' element={<Usuario/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

//De acordo com a rota, chama um componente específico
export default function RoutsApp() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
  )
}

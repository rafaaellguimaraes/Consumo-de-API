import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

export default function RoutsApp() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
  )
}

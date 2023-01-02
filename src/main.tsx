import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
  </React.StrictMode>,
)

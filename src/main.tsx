import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutsApp from './routes/index'
import Header from './components/Header/index'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <RoutsApp />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
)

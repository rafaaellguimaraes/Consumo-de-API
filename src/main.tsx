import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutsApp from './routes/index'
import Header from './components/Header/index'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store, {persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Header />
        <RoutsApp />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container"/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

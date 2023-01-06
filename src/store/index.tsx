import  { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'
import { persistStore } from 'redux-persist'
import persistedReducers from './modules/reduxPersist'
//Centro de informações, que tem disponibilidade para receber e entregar o que seu componente requisita. A Store armazena de forma centralizada todos os estados da aplicação

//Função reducer movida para o arquivo reducer

const sagaMiddleware = createSagaMiddleware()
//Variavel que recebe o createStore passando a função como parâmetro
const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store

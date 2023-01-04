import  { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'
//Centro de informações, que tem disponibilidade para receber e entregar o que seu componente requisita. A Store armazena de forma centralizada todos os estados da aplicação

//Função reducer movida para o arquivo reducer

const sagaMiddleware = createSagaMiddleware()
//Variavel que recebe o createStore passando a função como parâmetro
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store

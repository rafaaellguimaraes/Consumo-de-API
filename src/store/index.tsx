import  { legacy_createStore as createStore } from 'redux'
import rootReducer from './modules/rootReducer';

//Centro de informações, que tem disponibilidade para receber e entregar o que seu componente requisita. A Store armazena de forma centralizada todos os estados da aplicação

//Função reducer movida para o arquivo reducer

//Variavel que recebe o createStore passando a função como parâmetro
const store = createStore(rootReducer);

export default store

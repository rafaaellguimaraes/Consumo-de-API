import  { legacy_createStore as createStore } from 'redux'


//Centro de informações, que tem disponibilidade para receber e entregar o que seu componente requisita. A Store armazena de forma centralizada todos os estados da aplicação

//Aqui eu seto que o botão vai iniciar com o estado falso (Não clicou)
const initialState = {
  botaoClicado: false
}

//A função reducer vai receber como parametro, o estado (initialState) e uma ação. Ao clicar no botão, passamos um switch para verificar qual foi a ação atraves do case e retornamos algo.
const reducer = (state = initialState, action: any) => {
  switch(action.type){
    case 'BOTAO_CLICADO':
      const newState = {...state} //newState vai receber o estado atual de state
      newState.botaoClicado = !newState.botaoClicado //Se o botão clicado for diferente do botão clicado, retornamos o novo estado
      return newState

    default:
      return state
  }
}

//Variavel que recebe o createStore passando a função como parâmetro
const store = createStore(reducer);

export default store

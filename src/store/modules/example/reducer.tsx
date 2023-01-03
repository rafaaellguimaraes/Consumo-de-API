//Aqui eu seto que o botão vai iniciar com o estado falso (Não clicou)
const initialState = {
  botaoClicado: false
}

//A função reducer vai receber como parametro, o estado (initialState) e uma ação. Ao clicar no botão, passamos um switch para verificar qual foi a ação atraves do case e retornamos algo.
export default function(state = initialState, action: any){
  switch(action.type){
    case 'BOTAO_CLICADO':
      const newState = {...state} //newState vai receber o estado atual de state
      newState.botaoClicado = !newState.botaoClicado //Se o botão clicado for diferente do botão clicado, retornamos o novo estado
      return newState

    default:
      return state
  }
}

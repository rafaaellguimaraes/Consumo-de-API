import {call, put, all, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'
import { toast } from 'react-toastify'
//takeLatest pega a ultima vez que o usuário clicou no botão
//O all permite colocar mais de uma ação para escutar

const requisicao = (): Promise<void> => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, 600);
});

function* exampleRequest(): Generator<any, void, any>{
    try {
        //Se executou com sucesso, e não foi rejeitado a promisse, disparo uma action
        yield call(requisicao) //Basicamente quase seria um await
        yield put(actions.clicaBotaoSuccess())
        toast.success('Login efetuado')
    } catch {
      toast.error('Deu erro')
      yield put(actions.clicaBotaoFailure())
    }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])

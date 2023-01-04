import { all } from 'redux-saga/effects'
import example from './example/sagas'

export default function* rootSaga(): any {
  return yield all([example])
}

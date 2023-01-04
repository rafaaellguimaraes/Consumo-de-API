import { combineReducers } from 'redux'
import exampleReducer from './example/reducer'

//Essa função serve para que eu possa ter mais de um reducer
export default combineReducers({
  example: exampleReducer,
})

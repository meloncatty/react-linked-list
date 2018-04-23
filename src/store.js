import { combineReducers, createStore } from 'redux'
import todoListApp from './reducer.js'

const reducers = combineReducers({
  todoListApp
})

export default createStore(reducers)
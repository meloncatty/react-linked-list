import { combineReducers, createStore } from 'redux'
import todoListApp from './reducer/reducer.js'
import { loadState } from './localStorage/localStorage.js'

const persistedState = loadState()
const reducers = combineReducers({
  todoListApp,
  persistedState
})

export default createStore(reducers)

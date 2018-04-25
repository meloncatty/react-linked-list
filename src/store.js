import { createStore } from 'redux'
import todoListApp from './reducer/reducer.js'
import { loadState } from './localStorage/localStorage.js'

const persistedState = loadState()

export default createStore(todoListApp, persistedState)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import store from './store'
import {loadState} from './localStorage/localStorage.js'
import todoListApp from './reducer/reducer.js'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import { throttle } from 'lodash'

const persistedState = loadState()
const reducers = combineReducers({
  todoListApp,
  persistedState
})
const store = createStore(
  reducers
)
store.subscribe(throttle(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()))
}), 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

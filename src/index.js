/* global localStorage */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { saveState } from './localStorage/localStorage.js'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import throttle from 'lodash/throttle'

store.subscribe(throttle(() => {
  localStorage.length > 1
    ? saveState({
      todos: []
    })
    : saveState({
      todos: store.getState().todos
    })
}), 1000)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

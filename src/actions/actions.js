import types from '../constants/constants.js'
import { v4 } from 'node-uuid'

const actions = {
  submitTodo (text) {
    return {
      type: types.SUBMIT_TODO,
      id: v4(),
      text
    }
  },

  deleteTodo (id) {
    return {
      type: types.DELETE_TODO,
      id
    }
  },

  undeleteTodo () {
    return {
      type: types.UNDELETE_TODO
    }
  },

  watchInput (inputText) {
    return {
      type: types.WATCH_INPUT,
      inputText
    }
  },

  checkStorage () {
    return {
      type: types.CHECK_STORAGE
    }
  }
}

export default actions

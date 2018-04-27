import types from '../constants/constants.js'
const uuidv1 = require('uuid/v1');

const actions = {
  submitTodo ({title, body}) {
    return {
      type: types.SUBMIT_TODO,
      id: uuidv1(),
      title,
      body
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
      type: types.WATCH_TITLE
    }
  }
}

export default actions

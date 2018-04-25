import types from '../constants/constants.js'

export const initialState = {
  todos: [],
  deleted: {},
  disableTodo: true,
  disableUndelete: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      if (state.todos === undefined) {
        console.log(initialState)
        return {
          ...initialState,
          todos: [
            {
              id: action.id,
              text: action.text
            }
          ]
        }
      } else {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text
            }
          ],
          disableTodo: true
        }
      }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          ))
        ],
        deleted: state.todos.filter(todo => todo.id === action.id)[0],
        disableUndelete: false
      }

    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          state.deleted
        ],
        deleted: {},
        disableUndelete: true
      }

    case types.WATCH_INPUT:
      if (action.inputText) {
        return {
          ...state,
          disableTodo: false
        }
      }
      return {
        ...state,
        disableTodo: true
      }

    default:
      return state
  }
}

export default reducer

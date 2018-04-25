import React from 'react'
import ToDo from './components/ToDo'
import TodoList from './components/TodoList'
import './App.css'
import actions from './actions/actions.js'
import { connect } from 'react-redux'

export const App = ({ submitTodo, todos, deleteTodo, undeleteTodo, disableTodo, disableUndelete, watchInput }) => (
  <div>
    <h1>Todo list</h1>
    <ToDo submitTodo={submitTodo} undeleteTodo={undeleteTodo}
      disableTodo={disableTodo} disableUndelete={disableUndelete}
      watchInput={watchInput} />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
)

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text))
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id))
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo())
  },

  watchInput: (inputText) => {
    dispatch(actions.watchInput(inputText))
  },

  checkStorage: () => {
    dispatch(actions.checkStorage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

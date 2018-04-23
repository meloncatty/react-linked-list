import React from 'react'
import ToDo from './ToDo'
import TodoList from './TodoList'
import './App.css'
import actions from './actions.js'
import { connect } from 'react-redux'


export const App = ({ submitTodo, todos }) => (
  <div>
    <h1>Todo list</h1>
    <ToDo submitTodo={submitTodo} />
    <TodoList todos={todos} />
  </div>
)

const mapStateToProps = state => state.todoListApp

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

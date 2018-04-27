import React from 'react'

const TodoList = ({ todos = [], deleteTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <button
        type='button'
        className='todo-delete'
        onClick={() => deleteTodo(todo.id)}
      >
          delete
      </button>
      <span className='todo-item'>{todo.title} {todo.body}</span>
    </li>
  ))

  return (
    <ul>
      {todoItems}
    </ul>
  )
}

export default TodoList

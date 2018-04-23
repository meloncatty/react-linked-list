import React from 'react'

const TodoList = ({ todos }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <span className='todo-item'>{todo.text}</span>
    </li>
  ))

  return (
    <ul>
      {todoItems}
    </ul>
  )
}

export default TodoList

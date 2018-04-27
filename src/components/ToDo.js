import React from 'react'

const ToDo = ({submitTodo, undeleteTodo, disableTodo, disableUndelete, watchInput}) => {
  let title
  let body

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          let todoData = (title, body) => {
            return {
              title: title.value,
              body: body.value
            }
          }
          submitTodo(todoData(title, body))
          title.value = ''
          body.value = ''
        }}
      >
        <input
          className='to-do-item'
          placeholder='Add a title...'
          ref={(element) => {
            title = element
          }}
          onChange={() => {
            watchInput(title.value)}}
        />
        <input
          className='todo-body'
          placeholder='Add a body...'
          ref={(element) => {
            body = element
          }}
          onChange={() => watchInput(body.value)}
        />
        <button
          className='submit-todo'
          type='submit'
          disabled={disableTodo}>
          submit
        </button>
        <button
          className='undelete-todo'
          onClick={() => undeleteTodo()}
          disabled={disableUndelete}>
          undelete
        </button>
      </form>
    </div>
  )
}

export default ToDo

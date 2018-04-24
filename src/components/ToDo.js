import React from 'react'

const ToDo = ({submitTodo, undeleteTodo, disableTodo, disableUndelete, watchInput}) => {
  let input

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          submitTodo(input.value)
          input.value = ''
        }}
      >
        <input
          className='to-do-item'
          placeholder='Add a to-do...'
          ref={(element) => {
            input = element
          }}
          onChange={() => watchInput(input.value)}
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

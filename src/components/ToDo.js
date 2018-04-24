import React from 'react'

const ToDo = ({submitTodo, undeleteTodo}) => {
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
        />
        <button
          className='submit-todo'
          type='submit'>
          submit
        </button>
        <button
          className='undelete-todo'
          onClick={() => undeleteTodo()}
          disabled>
          undelete
        </button>
      </form>
    </div>
  )
}

export default ToDo

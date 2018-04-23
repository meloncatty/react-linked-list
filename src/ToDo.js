import React from 'react'

const ToDo = ({submitTodo}) => {
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
          className='submit-to-do'
          type='submit'>
          submit
        </button>
      </form>
    </div>
  )
}

export default ToDo

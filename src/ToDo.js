import React from 'react'

export default function ToDo(props) {
  const inputChanged = (text) => {
    return text
  }
  let input;
  return(
    <div>
      <form
        onSubmit={(event) => {
        event.preventDefault()
        props.submitToDo(input.value)
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

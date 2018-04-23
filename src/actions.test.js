import actions from './actions'
import types from './constants.js'

describe('Actions', () => {
  const todoText = 'item'
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText
    }
    expect(actions.submitTodo(todoText)).toEqual(expectedAction)
  })
})

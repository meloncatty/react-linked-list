/* global describe it, expect, describe */

import actions from './actions'
import types from '../constants/constants.js'

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

  it('Should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    }

    expect(actions.deleteTodo(1)).toEqual(expectedAction)
  })
})

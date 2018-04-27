/* global describe it, expect, describe */

import actions from './actions'
import types from '../constants/constants.js'

describe('Actions', () => {
  it('should create an action to add a todo', () => {
    const expectedType = 'SUBMIT_TODO'
    const expectedTitle = 'title'
    const expectedBody = 'body'
    const data = {
      title: 'title',
      body: 'body'
    }

    expect(actions.submitTodo(data).type).toEqual(expectedType)
    expect(actions.submitTodo(data).title).toEqual(expectedTitle)
    expect(actions.submitTodo(data).body).toEqual(expectedBody)
    expect(actions.submitTodo(data)).toHaveProperty('id')
  })

  it('Should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    }

    expect(actions.deleteTodo(1)).toEqual(expectedAction)
  })
})

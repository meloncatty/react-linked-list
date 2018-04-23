/* global describe it, expect, describe */

import types from '../constants/constants.js'
import { reducer, initialState } from '../reducer/reducer.js'

describe('Reducer', () => {
  const todoText = 'item'
  it('should return initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('Submit todo', () => {
    it('should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      }
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ]
      }
      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })
})

/* global describe it, expect, describe */

import types from '../constants/constants.js'
import { reducer, initialState } from './reducer.js'

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
        ],
        deleted: {}
      }
      expect(reducer(undefined, action)).toEqual(expectedState)
    })
  })

  describe('Delete todo', () => {
    it('should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deleted: {}
      }
      const action = {
        type: types.DELETE_TODO,
        id: 1
      }
      const expectedState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText
        }
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })

  describe('Undelete todo', () => {
    it('should return the correct state', () => {
      const startingState = {
        todos: [],
        deleted: {
          id: 1,
          text: todoText
        }
      }
      const action = {
        type: types.UNDELETE_TODO
      }
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          }
        ],
        deleted: {}
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })
})

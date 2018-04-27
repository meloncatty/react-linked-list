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
        title: 'title',
        body: 'body'
      }
      const expectedState = {
        todos: [
          {
            id: 1,
            title: 'title',
            body: 'body'
          }
        ],
        deleted: {},
        disableTodo: true,
        disableUndelete: true
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
            title: 'title',
            body: 'body'
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
          title: 'title',
          body: 'body'
        },
        disableUndelete: false
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
          title: 'title',
          body: 'body'
        }
      }
      const action = {
        type: types.UNDELETE_TODO
      }
      const expectedState = {
        todos: [
          {
            id: 1,
            title: 'title',
            body: 'body'
          }
        ],
        deleted: {},
        disableUndelete: true
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })

  describe('Watch input', () => {
    it('should return the correct state', () => {
      const startingState = {
        todos: [],
        deleted: {},
        disableTodo: true
      }
      const action = {
        type: types.WATCH_INPUT,
        inputText: todoText
      }
      const expectedState = {
        todos: [],
        deleted: {},
        disableTodo: false
      }

      expect(reducer(startingState, action)).toEqual(expectedState)
    })
  })
})

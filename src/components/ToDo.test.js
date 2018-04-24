/* global jest, it, expect, describe */

import React from 'react'
import ToDo from './ToDo'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ToDo', () => {
  const undeleteMock = jest.fn()
  const props = {
    todos: [
      {
        id: 1,
        text: 'item'
      }
    ],
    undeleteTodo: undeleteMock
  }
  const toDo = shallow(<ToDo undeleteTodo={props.undeleteTodo} />)

  it('should exist', () => {
    expect(toDo).toBeDefined()
  })

  it('should have an input', () => {
    expect(toDo.find('input').length).toEqual(1)
  })

  it('should have a submit button', () => {
    expect(toDo.find('.submit-todo').length).toEqual(1)
  })

  it('should have an undelete button', () => {
    expect(toDo.find('.undelete-todo').length).toEqual(1)
  })

  it('should call undelete function when clicked', () => {
    expect(undeleteMock.mock.calls.length).toEqual(0)
    toDo.find('.undelete-todo').simulate('click')
    expect(undeleteMock.mock.calls.length).toEqual(1)
  })
})

/* global jest, it, expect, describe */

import React from 'react'
import ToDo from './ToDo'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ToDo', () => {
  const undeleteMock = jest.fn()
  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo'
      }
    ],
    undeleteTodo: undeleteMock
  }
  it('should exist', () => {
    const toDo = mount(<ToDo />)
    expect(toDo).toBeDefined()
  })

  it('should have an input', () => {
    const toDo = mount(<ToDo />)
    expect(toDo.find('input').length).toEqual(1)
  })

  it('should have a submit button', () => {
    const toDo = mount(<ToDo />)
    expect(toDo.find('.submit-todo').length).toEqual(1)
  })

  it('should have an undelete button', () => {
    const toDo = mount(<ToDo />)
    expect(toDo.find('.undelete-todo').length).toEqual(1)
  })

  it('should call undelete function when clicked', () => {
    const toDo = shallow(<ToDo undeleteTodo={props.undeleteTodo} />)
    expect(undeleteMock.mock.calls.length).toEqual(0)
    toDo.find('.undelete-todo').simulate('click')
    expect(undeleteMock.mock.calls.length).toEqual(1)
  })
})

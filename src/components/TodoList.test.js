/* global describe, it, expect, jest */

import React from 'react'
import { shallow, configure } from 'enzyme'
import TodoList from './TodoList.js'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('TodoList component', () => {
  const deleteMock = jest.fn()

  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo'
      }
    ],
    deleteTodo: deleteMock
  }

  const renderedList = shallow(<TodoList todos={props.todos} deleteTodo={props.deleteTodo} />)

  it('should render successfully', () => {
    expect(renderedList.exists()).toEqual(true)
  })

  it('should display a todo when passed in as a prop', () => {
    expect(renderedList.find('.todo-item').text()).toEqual(props.todos[0].text)
  })

  it('should delete todo when delete button is pressed', () => {
    expect(deleteMock.mock.calls.length).toEqual(0)
    renderedList.find('.todo-delete').simulate('click')
    expect(deleteMock.mock.calls.length).toEqual(1)
  })
})

import React from 'react'
import { shallow, configure } from 'enzyme'
import TodoList from './TodoList.js'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('TodoList component', () => {
  const todos = [
    {
      id: 1,
      text: 'an item'
    }
  ]

  const renderedList = shallow(<TodoList todos={todos}/>)

  it('should render successfully', () => {
    expect(renderedList.exists()).toEqual(true)
  })

  it('should display a todo when passed in as a prop', () => {
    expect(renderedList.find('.todo-item').text()).toEqual(todos[0].text)
  })
})

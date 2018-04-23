import React from 'react'
import ReactDOM from 'react-dom'
import ToDo from './ToDo'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('ToDo', () => {
  it('should exist', () => {
    const toDo = mount(<ToDo />)
    expect(toDo).toBeDefined()
  })

  it('should have an input', () => {
    const toDo = mount(<ToDo />)
    expect(toDo.find('input').length).toEqual(1)
  })

  it('should have a submit button', ()=> {
    const toDo = mount(<ToDo />)
    expect(toDo.find('button').length).toEqual(1)
  })

  it('should submit a to do', () => {
    const submitMock = jest.fn()
    const toDo = mount(<ToDo submitToDo={submitMock}/>)

    expect(submitMock.mock.calls.length).toEqual(0)
    toDo.find('form').simulate('submit')
    expect(submitMock.mock.calls.length).toEqual(1)
  })
})
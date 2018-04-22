import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should have default state', () => {
    const renderedApp = shallow(<App />)
    const toDo = ''
    const toDoList = []
    expect(renderedApp.state('toDo')).toEqual(toDo)
    expect(renderedApp.state('toDoList')).toEqual(toDoList)
  })
})

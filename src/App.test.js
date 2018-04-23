/* global it, expect, jest */

import React from 'react'
import { shallow, configure } from 'enzyme'
import { App } from './App'
import { initialState } from './reducer/reducer.js'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

it('App renders without crashing', () => {
  const mockFunction = jest.fn()

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
    />
  )

  expect(component.exists()).toEqual(true)
})

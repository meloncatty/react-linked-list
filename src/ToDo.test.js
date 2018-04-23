/* global describe it, expect, describe */

import React from 'react'
import ToDo from './ToDo'
import { configure, mount } from 'enzyme'
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

  it('should have a submit button', () => {
    const toDo = mount(<ToDo />)
    expect(toDo.find('button').length).toEqual(1)
  })
})

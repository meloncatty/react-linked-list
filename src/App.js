import React, { Component } from 'react'
import ToDo from './ToDo'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDo: '',
      toDoList: []
    }
  }

  submitToDo(text) {
    return text
  }

  changeInput(text) {
    return text
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'></header>
        <ToDo toDo={this.state.submitToDo}/>
      </div>
    )
  }
}

export default App

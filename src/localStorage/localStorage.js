/* global localStorage */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    return JSON.parse(serializedState)
  } catch (err) {
    // ...
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // ...
  }
}

export default {loadState, saveState}

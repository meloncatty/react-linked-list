export const loadState = () => {
  try {
    if (localStorage.getItem('state') !== null) {
      const serializedState = localStorage.getItem('state')
      return JSON.parse(serializedState)
    }
  } catch(err) {
    //write code here
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(err) {
    //write code here
  }
}


export default {loadState, saveState}

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos

// selectors start with "get" and it selects something from the UI
// the "state" here refers to the state of the exported reducer in the file
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'completed':
      return state.filter(t => t.completed)
    case 'active':
      return state.filter(t => !t.completed)
  }
}

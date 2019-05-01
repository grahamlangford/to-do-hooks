import todoActions from '../actions/constants'

export default (state = [], { type, payload }) => {
  switch (type) {
    case todoActions.ADD_TODO:
      return [...state, payload]

    case todoActions.UPDATE_TODO:
      return state.map(todo => (todo.id === payload.id ? payload : todo))

    case todoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

import todoActions from './constants'

export const addTodo = payload => ({ type: todoActions.ADD_TODO, payload })

export const updateTodo = payload => ({
  type: todoActions.UPDATE_TODO,
  payload
})

export const deleteById = payload => ({
  type: todoActions.DELETE_TODO,
  payload
})

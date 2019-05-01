import { addTodo, updateTodo, deleteById } from './todos'
import todoActions from './constants'

describe('Todo action creators', () => {
  it('addTodo creates an action of type: ADD_TODO', () => {
    const payload = {
      id: '11111',
      value: 'thing to do',
      checked: false
    }
    expect(addTodo(payload)).toEqual({ type: todoActions.ADD_TODO, payload })
  })

  it('updateTodo creates an action of type: UPDATE_TODO', () => {
    const payload = {
      id: '11111',
      value: 'thing to do',
      checked: false
    }
    expect(updateTodo(payload)).toEqual({
      type: todoActions.UPDATE_TODO,
      payload
    })
  })

  it('deleteById creates an action of type: DELETE_TODO', () => {
    const payload = { id: '11111' }
    expect(deleteById(payload)).toEqual({
      type: todoActions.DELETE_TODO,
      payload
    })
  })
})

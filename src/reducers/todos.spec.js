import todosReducer from './todos'
import { addTodo, updateTodo, deleteById } from '../actions/todos'

describe('todos reducer', () => {
  let dummyState

  beforeEach(() => {
    dummyState = [{ id: '1', value: 'to do', checked: false }]
  })

  it('ADD_TODO', () => {
    const newTodo = { id: '2', value: 'new todo', checked: false }

    const state = todosReducer(dummyState, addTodo(newTodo))
    expect(state).toEqual([...dummyState, newTodo])
  })

  it('UPDATE_TODO', () => {
    const todos = [
      { id: '1', value: 'to do', checked: false },
      { id: '2', value: 'new todo', checked: false }
    ]
    const change = { id: '1', value: 'changed todo', checked: true }
    const updated = [
      { id: '1', value: 'changed todo', checked: true },
      { id: '2', value: 'new todo', checked: false }
    ]

    expect(todosReducer(todos, updateTodo(change))).toEqual(updated)
  })

  it('DELETE_TODO', () => {
    const toDelete = { id: '1', value: 'to do', checked: false }
    const toKeep = { id: '2', value: 'new todo', checked: false }
    const todos = [toDelete, toKeep]

    expect(todosReducer(todos, deleteById('1'))).toEqual([toKeep])
  })
})

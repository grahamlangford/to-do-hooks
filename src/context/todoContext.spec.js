import { renderHook, act } from 'react-hooks-testing-library'
import { useTodo, TodoProvider } from './todoContext'

describe('context/todoContext.jsx', () => {
  const testTodos = [
    { id: '0', value: 'test-0', checked: false },
    { id: '1', value: 'test-1', checked: true }
  ]
  beforeEach(() => {
    window.localStorage.setItem('todos-context', JSON.stringify(testTodos))
  })

  it('addTodo adds a new todo to the array', () => {
    const { result } = renderHook(() => useTodo(), { wrapper: TodoProvider })

    expect(result.current.todos).toEqual(testTodos)
    const newTodo = { id: '3', value: 'test-3', checked: true }

    act(() => result.current.addTodo(newTodo))

    expect(result.current.todos).toEqual([...testTodos, newTodo])
  })

  it('updateTodo replaces a todo with a new version', () => {
    const newTodo = { id: '1', value: 'updated value', checked: false }

    const { result } = renderHook(() => useTodo(), { wrapper: TodoProvider })
    expect(result.current.todos).toEqual(testTodos)

    act(() => result.current.updateTodo(newTodo))
    expect(result.current.todos).toEqual([testTodos[0], newTodo])
  })

  it('deleteTodo removes the todo by its id', () => {
    const { result } = renderHook(() => useTodo(), { wrapper: TodoProvider })
    expect(result.current.todos).toEqual(testTodos)

    act(() => result.current.deleteTodo('0'))
    expect(result.current.todos).toEqual([testTodos[1]])
  })
})

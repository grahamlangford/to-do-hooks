import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback
} from 'react'

const TodoContext = createContext()

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  const [todos, setTodos] = context
  const addTodo = useCallback(todo => setTodos([...todos, todo]), [todos])
  const updateTodo = useCallback(
    update =>
      setTodos(todos.map(todo => (todo.id === update.id ? update : todo))),
    [todos]
  )
  const deleteTodo = useCallback(
    id => setTodos(todos.filter(todo => todo.id !== id)),
    [todos]
  )

  return { todos, addTodo, updateTodo, deleteTodo }
}

export const TodoProvider = props => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos-context')) || []
  )
  const value = useMemo(() => [todos, setTodos], [todos])

  return <TodoContext.Provider value={value} {...props} />
}

import React, { createContext, useContext, useState, useMemo } from 'react'

const TodoContext = createContext()

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  const [todos, setTodos] = context
  const addTodo = todo => setTodos([...todos, todo])
  const updateTodo = update =>
    setTodos(todos.map(todo => (todo.id === update.id ? update : todo)))
  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id))

  return { todos, setTodos, addTodo, updateTodo, deleteTodo }
}

export const TodoProvider = props => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos-context')) || []
  )
  const value = useMemo(() => [todos, setTodos], [todos])

  return <TodoContext.Provider value={value} {...props} />
}

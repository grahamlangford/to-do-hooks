import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import TodoContext from '../../context/todoContext'
import TodoList from '../ListContext'
import TodoForm from '../FormContext'

const Context = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos-context')) || []
  )

  useEffect(
    () => localStorage.setItem('todos-context', JSON.stringify(todos)),
    [todos]
  )

  const todoState = {
    todos,
    addTodo: todo => setTodos([...todos, todo]),
    updateTodo: update =>
      setTodos(todos.map(todo => (todo.id === update.id ? update : todo))),
    deleteTodo: id => setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <TodoContext.Provider value={todoState}>
        <Grid data-testid="context-component" container justify="center">
          <Grid item xs={10} md={8} lg={6}>
            <TodoList />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10} md={8} lg={6}>
            <TodoForm />
          </Grid>
        </Grid>
      </TodoContext.Provider>
    </>
  )
}

export default Context

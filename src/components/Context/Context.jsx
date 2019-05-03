import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
      <AppBar position="static" data-testid="app-bar">
        <Toolbar>
          <Typography variant="h6">Todo&mdash;Context</Typography>
        </Toolbar>
      </AppBar>
      <TodoContext.Provider value={todoState}>
        <Grid container justify="center">
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

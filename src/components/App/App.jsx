import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import TodoContext from '../../context/todoContext'
import ToDoList from '../ToDoList'
import ToDoForm from '../ToDoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  const todoState = {
    todos,
    addTodo: todo => setTodos([...todos, todo]),
    updateTodo: update =>
      setTodos(todos.map(todo => (todo.id === update.id ? update : todo))),
    deleteTodo: id => setTodos(todos.filter(todo => todo.id !== id))
  }

  console.log(todos)
  return (
    <>
      <TodoContext.Provider value={todoState}>
        <AppBar position="static" data-testid="app-bar">
          <Toolbar>
            <Typography variant="h6">To Do</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={10} md={8} lg={6}>
            <ToDoList />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10} md={8} lg={6}>
            <ToDoForm />
          </Grid>
        </Grid>
      </TodoContext.Provider>
    </>
  )
}

export default App

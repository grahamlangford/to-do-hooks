import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import TodoContext from '../../context/todoContext'
import ToDoForm from '../ToDoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  const todoState = {
    todos,
    addTodo: todo => setTodos([...todos, todo])
  }

  return (
    <>
      <TodoContext.Provider value={todoState}>
        <AppBar position="static" data-testid="app-bar">
          <Toolbar>
            <Typography variant="h6">To Do</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={6}>
            <ToDoForm />
          </Grid>
        </Grid>
      </TodoContext.Provider>
    </>
  )
}

export default App

import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import TodoContext from '../../context/todoContext'
import ToDoForm from '../ToDoForm/ToDoForm'

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
        <ToDoForm />
      </TodoContext.Provider>
    </>
  )
}

export default App

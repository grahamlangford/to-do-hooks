import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import { useTodo } from '../../context/todoContext'
import TodoList from '../ListContext'
import TodoForm from '../FormContext'

const Context = () => {
  const { todos } = useTodo()

  useEffect(
    () => localStorage.setItem('todos-context', JSON.stringify(todos)),
    [todos]
  )

  return (
    <>
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
    </>
  )
}

export default Context

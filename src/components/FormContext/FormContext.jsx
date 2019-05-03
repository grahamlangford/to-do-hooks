import React, { useState, useContext } from 'react'
import shortid from 'shortid'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import TodoContext from '../../context/todoContext'
import useStyles from './FormContext.styles'

const TodoForm = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const { addTodo } = useContext(TodoContext)
  const handleSubmit = e => {
    e.preventDefault()
    addTodo({ id: shortid.generate(), value, checked: false })
    setValue('')
  }

  return (
    <form
      data-testid="to-do-form-context"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <TextField
        id="add-todo-input-context"
        label="Add Todo"
        value={value}
        onChange={e => setValue(e.target.value)}
        margin="dense"
        variant="outlined"
        className={classes.text}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="submit-button"
      >
        Add
      </Button>
    </form>
  )
}

export default TodoForm

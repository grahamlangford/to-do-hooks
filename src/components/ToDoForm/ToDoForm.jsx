import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import TodoContext from '../../context/todoContext'
import styles from './ToDoForm.styles'

const ToDoForm = ({ classes }) => {
  const [value, setValue] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form
      data-testid="to-do-form"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <TextField
        id="add-todo-input"
        label="Add Todo"
        value={value}
        onChange={e => setValue(e.target.value)}
        margin="dense"
        variant="outlined"
        className={classes.text}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  )
}

ToDoForm.propTypes = {
  classes: PropTypes.object
}

ToDoForm.defaultProps = {
  classes: { form: '', text: '' }
}

export default withStyles(styles)(ToDoForm)

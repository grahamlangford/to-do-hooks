import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import todoActions from '../../actions/constants'
import useStyles from './Form.styles'

const ToDoForm = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const dispatchAdd = useCallback(
    () =>
      dispatch({
        type: todoActions.ADD_TODO,
        payload: { id: shortid.generate(), value, checked: false }
      }),
    [value]
  )
  const handleSubmit = e => {
    e.preventDefault()
    dispatchAdd()
    setValue('')
  }

  return (
    <form
      data-testid="to-do-form-redux"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <TextField
        id="add-todo-input-redux"
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

export default ToDoForm

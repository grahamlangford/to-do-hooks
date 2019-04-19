import React, { useState, useContext } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import TodoContext from '../../context/todoContext'

const ToDoForm = () => {
  const [value, setValue] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form data-testid="to-do-form" onSubmit={handleSubmit}>
      <TextField
        id="add-todo-input"
        label="Add Todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default ToDoForm

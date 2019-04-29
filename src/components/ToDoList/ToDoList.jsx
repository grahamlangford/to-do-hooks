import React, { useContext } from 'react'

import List from '@material-ui/core/List'
import ToDo from '../ToDo'

import TodoContext from '../../context/todoContext'

const ToDoList = () => {
  const { todos } = useContext(TodoContext)
  return (
    <List data-testid="to-do-list">
      {todos.map(todo => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default ToDoList

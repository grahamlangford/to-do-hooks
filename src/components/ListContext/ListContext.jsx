import React, { useContext } from 'react'

import List from '@material-ui/core/List'
import Todo from '../TodoContext'

import TodoContext from '../../context/todoContext'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  return (
    <List data-testid="to-do-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList

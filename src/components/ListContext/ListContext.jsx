import React from 'react'

import List from '@material-ui/core/List'
import Todo from '../TodoContext'

import { useTodo } from '../../context/todoContext'

const TodoList = () => {
  const { todos } = useTodo()

  return (
    <List data-testid="to-do-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList

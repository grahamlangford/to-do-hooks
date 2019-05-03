import React from 'react'
import { useSelector } from 'react-redux'

import List from '@material-ui/core/List'
import Todo from '../TodoRedux'

const ListRedux = () => {
  const { todos } = useSelector(state => state)

  return (
    <List data-testid="to-do-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default ListRedux

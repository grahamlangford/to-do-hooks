import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'

import TodoContext from '../../context/todoContext'

const ToDo = ({ todo: { id, value, checked } }) => {
  const { updateTodo } = useContext(TodoContext)

  const handleChecked = () => {
    updateTodo({ id, value, checked: !checked })
  }

  return (
    <ListItem key={`todo-${id}`}>
      <Checkbox
        checked={checked}
        data-testid="checkbox"
        onChange={handleChecked}
      />
      <ListItemText primary={value} />
    </ListItem>
  )
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
  }).isRequired
}

export default ToDo

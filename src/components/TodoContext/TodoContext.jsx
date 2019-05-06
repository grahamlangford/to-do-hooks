import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/styles'

import { useTodo } from '../../context/todoContext'

const useStyles = makeStyles(theme => ({
  delete: { marginRight: theme.spacing ? theme.spacing.unit * 2 : 0 },
  icon: { fill: theme.palette ? theme.palette.text.secondary : '' }
}))

const ToDo = ({ todo: { id, value, checked } }) => {
  const classes = useStyles()

  const { updateTodo, deleteTodo } = useTodo()

  const handleChecked = () => updateTodo({ id, value, checked: !checked })

  const handleDelete = () => deleteTodo(id)

  return (
    <ListItem key={`todo-${id}`}>
      <Checkbox
        checked={checked}
        data-testid="checkbox"
        onChange={handleChecked}
      />
      <ListItemText primary={value} />
      <ListItemSecondaryAction className={classes.delete}>
        <IconButton data-testid="delete" onClick={handleDelete}>
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </ListItemSecondaryAction>
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

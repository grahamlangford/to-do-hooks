import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

import Context from '../Context'
import Redux from '../Redux'
import { TodoProvider } from '../../context/todoContext'

const useStyles = makeStyles({
  grow: { flexGrow: 1 }
})

const App = () => {
  const classes = useStyles()
  const [isContext, setContext] = useState(true)

  const handleToggle = () => {
    setContext(!isContext)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" data-testid="app-bar">
            Todo&mdash;
            {isContext ? 'Context' : 'Redux'}
          </Typography>
          <div className={classes.grow} />
          <Typography component="div">
            <Grid component="label" container alignItems="center">
              <Grid item>Redux</Grid>
              <Grid item>
                <Switch
                  data-testid="store-switch"
                  checked={isContext}
                  onChange={handleToggle}
                  color="default"
                />
              </Grid>
              <Grid item>Context</Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
      {isContext ? (
        <TodoProvider>
          <Context />
        </TodoProvider>
      ) : (
        <Redux />
      )}
    </>
  )
}

export default App

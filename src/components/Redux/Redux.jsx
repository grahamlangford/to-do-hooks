import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import rootReducer from '../../reducers/index'
import TodoList from '../ListRedux'
import TodoForm from '../FormRedux'

const store = createStore(rootReducer)

const Redux = () => {
  return (
    <Provider store={store}>
      <AppBar position="static" data-testid="app-bar">
        <Toolbar>
          <Typography variant="h6">Todo&mdash;Redux</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={6}>
          <TodoList />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={6}>
          <TodoForm />
        </Grid>
      </Grid>
    </Provider>
  )
}

export default Redux

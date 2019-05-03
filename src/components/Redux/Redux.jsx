import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import rootReducer from '../../reducers/index'
import TodoList from '../ListRedux'
import TodoForm from '../FormRedux'

const persistedState = localStorage.getItem('todos-redux')
  ? JSON.parse(localStorage.getItem('todos-redux'))
  : {}

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todos-redux', JSON.stringify(store.getState()))
})

const Redux = () => {
  return (
    <Provider store={store}>
      <Grid data-testid="redux-component" container justify="center">
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

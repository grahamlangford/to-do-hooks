import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../reducers/index'

const testTodos = [
  { id: '0', value: 'test-0', checked: false },
  { id: '1', value: 'test-1', checked: true }
]

const store = createStore(rootReducer, { todos: testTodos })

export default ({ children }) => <Provider store={store}>{children}</Provider>

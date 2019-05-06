import React from 'react'
import { render } from 'react-testing-library'
import ToDoList from '.'
import { TodoProvider } from '../../context/todoContext'

describe('ToDoList.jsx', () => {
  const wrapper = () =>
    render(
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    )

  it('renders without crashing', () => {
    wrapper()
  })
})

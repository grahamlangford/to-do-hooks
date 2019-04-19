import React from 'react'
import { render } from 'react-testing-library'
import ToDoList from '.'

describe('ToDoList.jsx', () => {
  const wrapper = () => render(<ToDoList />)

  it('renders without crashing', () => {
    wrapper()
  })
})

import React from 'react'
import { render } from 'react-testing-library'
import Context from '.'

describe('Context.jsx', () => {
  const wrapper = () => render(<Context />)

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders an AppBar with title: To Do', () => {
    const { getByTestId } = wrapper()
    const appbar = getByTestId('app-bar')

    expect(appbar).toBeVisible()
    expect(appbar.textContent).toMatch(/Todo/)
  })

  it('has a form to add todos', () => {
    const { getAllByTestId } = wrapper()
    const todoList = getAllByTestId('to-do-list')

    expect(todoList).toHaveLength(1)
  })
})

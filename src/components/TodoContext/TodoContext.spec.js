import React from 'react'
import { render } from 'react-testing-library'
import shortid from 'shortid'

import Todo from '.'
import { TodoProvider } from '../../context/todoContext'

describe('TodoContext.jsx', () => {
  const defaultProps = {
    todo: {
      id: shortid.generate(),
      value: 'thing to do',
      checked: false
    }
  }
  const wrapper = (props = defaultProps) =>
    render(
      <TodoProvider>
        <Todo {...props} />
      </TodoProvider>
    )

  it('renders without crashing', () => {
    wrapper()
  })

  it('shows the todo text', () => {
    const { getByText } = wrapper()
    const text = getByText('thing to do')

    expect(text).toHaveTextContent('thing to do')
  })

  it('has a checkbox', () => {
    const { getByTestId } = wrapper()
    const checkbox = getByTestId('checkbox')

    expect(checkbox).toBeVisible()
  })

  it('has a delete button', () => {
    const { getByTestId } = wrapper()
    const deleteButton = getByTestId('delete')

    expect(deleteButton).toBeVisible()
  })
})

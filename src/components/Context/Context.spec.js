import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Context from '.'
import { TodoProvider } from '../../context/todoContext'

describe('Context.jsx', () => {
  const wrapper = () =>
    render(
      <TodoProvider>
        <Context />
      </TodoProvider>
    )

  it('renders without crashing', () => {
    wrapper()
  })

  it('has a form to add todos', () => {
    const { getAllByTestId } = wrapper()
    const todoList = getAllByTestId('to-do-list')

    expect(todoList).toHaveLength(1)
  })

  it('inputing a todo and clicking add adds the todo to the list', () => {
    const { getByLabelText, getByTestId, getByText } = wrapper()
    const textField = getByLabelText('Add Todo')

    fireEvent.change(textField, { target: { value: 'do things' } })

    const submit = getByTestId('submit-button')
    fireEvent.click(submit)

    const listItem = getByText('do things')

    expect(listItem).toBeVisible()
  })

  it('user can mark a todo done', () => {
    const { getByLabelText, getByTestId } = wrapper()
    const textField = getByLabelText('Add Todo')
    fireEvent.change(textField, { target: { value: 'do things' } })
    const submit = getByTestId('submit-button')
    fireEvent.click(submit)

    const checkbox = getByTestId('checkbox').querySelector(
      'input[type="checkbox"]'
    )
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })

  it('user can delete a todo', () => {
    const { getByTestId, getAllByText } = wrapper()

    const deleteTodo = getByTestId('delete')
    fireEvent.click(deleteTodo)

    const listItems = getAllByText(/things/)
    expect(listItems).toHaveLength(1)
  })
})

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import ToDoForm from '.'

let defaultProps
describe('ToDoForm.jsx', () => {
  defaultProps = {}
  const wrapper = (props = defaultProps) => render(<ToDoForm {...props} />)

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders a form', () => {
    const { getByTestId } = wrapper()
    const form = getByTestId('to-do-form')

    expect(form).toBeVisible()
  })

  it('the form contains an "Add Todo" text field', () => {
    const { getByLabelText } = wrapper()
    const textField = getByLabelText('Add Todo')

    expect(textField).toBeVisible()
  })

  it('should allow the user to type a todo into the input', () => {
    const { getByLabelText, rerender } = wrapper()
    const textField = getByLabelText('Add Todo')

    fireEvent.change(textField, { target: { value: 'do things' } })

    rerender(<ToDoForm />)
    expect(textField.value).toBe('do things')
  })
})

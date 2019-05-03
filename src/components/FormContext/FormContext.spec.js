import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import FormContext from '.'

describe('FormContext.jsx', () => {
  const wrapper = () => render(<FormContext />)

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders a form', () => {
    const { getByTestId } = wrapper()
    const form = getByTestId('to-do-form-context')

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

    rerender(<FormContext />)
    expect(textField.value).toBe('do things')
  })
})

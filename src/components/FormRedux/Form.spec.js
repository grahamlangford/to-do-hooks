import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Form from '.'
import ReduxTestHelper from '../../utils/reduxTestHelper'

describe('Form.jsx', () => {
  const wrapper = () =>
    render(
      <ReduxTestHelper>
        <Form />
      </ReduxTestHelper>
    )

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders a form', () => {
    const { getByTestId } = wrapper()
    const form = getByTestId('to-do-form-redux')

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

    rerender(
      <ReduxTestHelper>
        <Form />
      </ReduxTestHelper>
    )
    expect(textField.value).toBe('do things')
  })
})

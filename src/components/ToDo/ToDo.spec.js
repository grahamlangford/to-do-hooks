import React from 'react'
import { render } from 'react-testing-library'
import shortid from 'shortid'

import ToDo from '.'

describe('ToDo.jsx', () => {
  const defaultProps = {
    todo: {
      id: shortid.generate(),
      value: 'thing to do',
      checked: false
    }
  }
  const wrapper = (props = defaultProps) => render(<ToDo {...props} />)

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
})

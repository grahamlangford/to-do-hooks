import React from 'react'
import { render } from 'react-testing-library'
import ToDo from '.'

describe('ToDo.jsx', () => {
  const wrapper = () => render(<ToDo />)

  it('renders without crashing', () => {
    wrapper()
  })
})

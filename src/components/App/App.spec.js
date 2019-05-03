import React from 'react'
import { render } from 'react-testing-library'
import App from '.'

describe('App.jsx', () => {
  const wrapper = () => render(<App />)

  it('renders without crashing', () => {
    wrapper()
  })
})

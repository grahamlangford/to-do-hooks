import React from 'react'
import { render } from 'react-testing-library'
import App from '.'

describe('App.jsx', () => {
  const wrapper = () => render(<App />)

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders an AppBar with title: To Do', () => {
    const { getByTestId } = wrapper()
    const appbar = getByTestId('app-bar')

    expect(appbar).toBeVisible()
    expect(appbar.textContent).toBe('To Do')
  })
})

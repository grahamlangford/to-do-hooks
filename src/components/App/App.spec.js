import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import App from '.'

describe('App.jsx', () => {
  const wrapper = () => render(<App />)

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders an AppBar with title: Todo-Context', () => {
    const { getByTestId } = wrapper()
    const appbar = getByTestId('app-bar')

    expect(appbar).toBeVisible()
    expect(appbar.textContent).toMatch(/Todo\WContext/)
  })

  it('has a switch to toggle redux and context', () => {
    const { getByTestId } = wrapper()
    const toggle = getByTestId('store-switch').querySelector(
      'input[type="checkbox"]'
    )
    const appbar = getByTestId('app-bar')
    expect(appbar.textContent).toMatch(/Todo\WContext/)
    expect(getByTestId('context-component')).toBeVisible()

    fireEvent.click(toggle)
    expect(appbar.textContent).toMatch(/Todo\WRedux/)
    expect(getByTestId('redux-component')).toBeVisible()
  })
})

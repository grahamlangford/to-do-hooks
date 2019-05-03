import React from 'react'
import { render } from 'react-testing-library'

import ListRedux from '.'
import ReduxTestHelper from '../../utils/reduxTestHelper'

describe('ListRedux.jsx', () => {
  const wrapper = () =>
    render(
      <ReduxTestHelper>
        <ListRedux />
      </ReduxTestHelper>
    )

  it('renders without crashing', () => {
    wrapper()
  })

  it('renders a list of todos', () => {
    const { getAllByText } = wrapper()
    const todos = getAllByText('test', { exact: false })
    expect(todos).toHaveLength(2)
  })
})

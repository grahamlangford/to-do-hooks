import React from 'react'
import { render } from 'react-testing-library'
import ToDoList from '.'
import { TodoProvider } from '../../context/todoContext'

describe('ToDoList.jsx', () => {
  const testTodos = [
    { id: '0', value: 'test-0', checked: false },
    { id: '1', value: 'test-1', checked: true }
  ]

  const wrapper = () =>
    render(
      <TodoProvider value={[testTodos, () => {}]}>
        <ToDoList />
      </TodoProvider>
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

import React from 'react'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import Search from '.'

afterEach(cleanup)
test('Should render Search', () => {
  render(
    <Search onChange={() => jest.fn()} onSearch={() => jest.fn()}>
      <div>foo</div>
    </Search>
  )

  const search = screen.getByTestId('search-input')

  expect(search).toBeTruthy()
})

test('Should trigger onChange', () => {
  const onChange = jest.fn()
  render(
    <Search onChange={() => onChange()} onSearch={() => jest.fn()}>
      <div>foo</div>
    </Search>
  )

  const search = screen.getByTestId('search-input')
  fireEvent.change(search, { target: { value: '23' } })
  expect(search).toBeTruthy()
  expect((search as any).value).toBe('23')
  expect(onChange).toHaveBeenCalledTimes(1)
})

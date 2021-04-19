import { cleanup, render, screen } from '@testing-library/react'

import Header from '.'

afterEach(cleanup)
test('Should render without crashing', () => {
  render(<Header />)
  const components = screen.getAllByTestId('header-wrapper')
  expect(components.length).toBe(1)
})

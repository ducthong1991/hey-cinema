import { cleanup, render, screen } from '@testing-library/react'

import Loading from '.'

afterEach(cleanup)
test('Should render without crashing', () => {
  render(<Loading />)
  const components = screen.getAllByTestId('loading-wrapper')
  expect(components.length).toBe(1)
})

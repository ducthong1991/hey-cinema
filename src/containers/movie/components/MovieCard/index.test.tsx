import { cleanup, render, screen } from '@testing-library/react'

import MovieCard from '.'
import { formattedMovie } from '../../../../test-helpers/mocks'

afterEach(cleanup)
test('Should render without crashing', () => {
  render(<MovieCard movie={formattedMovie} />)
  const components = screen.getAllByTestId('card-wrapper')
  expect(components.length).toBe(1)
})

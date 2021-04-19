import { act, cleanup, render, screen } from '@testing-library/react'
import axios from 'axios'

import { movie } from '../../test-helpers/mocks'
import Movie from './index'

afterEach(cleanup)
test('Should render without crashing', async () => {
  // @ts-ignore
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { Search: [movie] },
    })
  )
  render(<Movie />)
  await act(() => Promise.resolve())
  const components = screen.getAllByTestId('movie-container')
  expect(components.length).toBe(1)
})

describe('FETCHING MOVIES DATA', () => {
  test('It should fetch and display list of movies on initial load', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { Search: [movie] },
      })
    )
    const { getByTestId } = render(<Movie />)
    await act(() => Promise.resolve())
    expect(getByTestId('card-wrapper')).toBeInTheDocument()
  })

  test('It should handle empty response', async () => {
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { Search: [] },
      })
    )
    const { getByTestId } = render(<Movie />)
    await act(() => Promise.resolve())
    expect(getByTestId('no-data')).toBeInTheDocument()
  })
})

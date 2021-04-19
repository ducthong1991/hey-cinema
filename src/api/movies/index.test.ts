import axios from 'axios'

import { fetchMovies, parseMovies } from '.'
import { movie } from '../../test-helpers/mocks'

test('Fetch movies success', async () => {
  // @ts-ignore
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { Search: [movie] },
    })
  )
  const result = await fetchMovies('')
  expect(result).toHaveLength(1)
  expect(result).toEqual(parseMovies([movie]))
})

test('Fetch movies fail', async () => {
  // @ts-ignore
  axios.get.mockImplementationOnce(() =>
    Promise.reject({
      message: 'Error',
    })
  )
  try {
    await fetchMovies('')
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toEqual({ message: 'Error' })
  }
})

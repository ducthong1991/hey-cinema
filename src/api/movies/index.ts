import axios from 'axios'

import { FetchMovies } from './types'

export const parseMovies = (movies: FetchMovies['ApiOutput']) => {
  const result = movies
    ? movies.map((movie: FetchMovies['ApiOutput'][0]) => {
        return {
          imdbId: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type,
          poster: movie.Poster,
        }
      })
    : []
  return result
}

export const fetchMovies = async (searchText: string) => {
  try {
    const response = await axios.get(
      `${window.env.API_URL}/?s=${searchText}&apikey=${window.env.API_KEY}`
    )
    return parseMovies(response.data.Search)
  } catch (error) {
    throw error
  }
}

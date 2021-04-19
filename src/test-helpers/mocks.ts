import { FetchMovies } from '../api/movies/types'

export const movie: FetchMovies['ApiOutput'][0] = {
  Title: 'Captain Marvel',
  Year: '2019',
  imdbID: 'tt4154664',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
}

export const formattedMovie: FetchMovies['Return'][0] = {
  title: 'Captain Marvel',
  year: '2019',
  imdbId: 'tt4154664',
  type: 'movie',
  poster:
    'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
}

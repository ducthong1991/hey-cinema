import { parseMovies } from '.'

export interface FetchMovies {
  ApiOutput: {
    imdbID: string
    Title: string
    Type: string
    Poster: string
    Year: string
  }[]
  Return: ReturnType<typeof parseMovies>
}

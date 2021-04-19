import { useCallback, useEffect, useState } from 'react'

import styled from 'styled-components'

import { fetchMovies } from '../../api/movies'
import { FetchMovies } from '../../api/movies/types'
import Search from '../../components/Search'
import { COLOR, Container } from '../../styled'
import { debounce } from '../../util/debounce'
import MovieCard from './components/MovieCard'

const MovieContainer = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<FetchMovies['Return']>([])
  const [searchText, setSearchText] = useState<string>('marvel')

  useEffect(() => {
    fetchData(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async (text: string) => {
    const data = await fetchMovies(text)
    setMovies(data)
    setLoading(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((text: string) => fetchData(text), 300),
    []
  )

  return (
    <>
      <Container data-testid="movie-container">
        <SearchSection>
          <Search
            disabled={loading}
            value={searchText}
            placeHolder="Search movie title..."
            onChange={(text: string) => {
              setSearchText(text)
              if (!!text) {
                debouncedSearch(text)
              } else {
                setMovies([])
              }
            }}
          />
        </SearchSection>
        <CardsSection>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </CardsSection>
        {!movies.length && (
          <NoResult data-testid="no-data">
            No result has been found, try again.
          </NoResult>
        )}
      </Container>
    </>
  )
}

export default MovieContainer

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
`

const CardsSection = styled.div`
  padding-bottom: 20px;
`

const NoResult = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: ${COLOR.PRIMARY};
  text-align: center;
`

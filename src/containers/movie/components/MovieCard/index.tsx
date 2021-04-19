import * as React from 'react'

import styled, { keyframes } from 'styled-components'

import { FetchMovies } from '../../../../api/movies/types'
import { COLOR } from '../../../../styled'

interface Props {
  movie: FetchMovies['Return'][0]
}

const MovieCard: React.FC<Props> = ({ movie }) => (
  <Card data-testid="card-wrapper">
    <CardPicture>
      <StyledImg src={movie.poster} alt="Poster" />
    </CardPicture>
    <CardInfo>
      <CardTitle>{movie.title}</CardTitle>
      <CardYear>{movie.year}</CardYear>
    </CardInfo>
  </Card>
)

export default MovieCard

const animationFrames = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, -25px);
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const Card = styled.div`
  max-width: 700px;
  padding: 0;
  border-radius: 8px;
  animation: ${animationFrames} ease 1s;
  margin-bottom: 20px;
  background-color: #fff;
  height: 120px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`
const CardPicture = styled.div`
  height: 100%;
  position: relative;
  width: 120px;
  min-width: 120px;
  &::after {
    position: absolute;
    top: 0;
    left: 40px;
    content: '';
    height: 0px;
    width: 40px;
    border-bottom: 120px solid #fff;
    border-left: 40px solid transparent;
  }
`

const StyledImg = styled.img`
  display: block;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`
const CardInfo = styled.div`
  background-color: #fff;
  z-index: 10;
`

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${COLOR.PRIMARY};
  margin-top: 20px;
  margin-bottom: 10px;
`

const CardYear = styled.div`
  font-size: 16px;
  color: ${COLOR.TERTIARY};
`

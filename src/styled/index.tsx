import styled from 'styled-components'

export const COLOR = {
  PRIMARY: '#7faae4',
  SECONDARY: '#834DB7',
  TERTIARY: '#34283F',
}

export const Container = styled.div`
  font-family: 'Exo', sans-serif;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`
export const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  font-weight: 500;
  color: #100f0f;
`

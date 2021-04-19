import * as React from 'react'

import styled from 'styled-components'

import { COLOR } from '../../styled'

const SearchComponent: React.FC<SearchProps> = ({
  disabled,
  value,
  placeHolder,
  onChange,
}) => {
  return (
    <SearchContainer>
      <SearchInput
        id="search-text"
        data-testid="search-input"
        tabIndex={1}
        type="search"
        placeholder={placeHolder || ''}
        disabled={disabled}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (!!onChange) {
            onChange(e.target.value)
          }
        }}
      />
      <StyledSvg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search-text"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        />
      </StyledSvg>
    </SearchContainer>
  )
}

export default SearchComponent

const SearchContainer = styled.div`
  width: 360px;
  position: relative;
  margin: 75px 0 50px;
`

const SearchInput = styled.input`
  width: 360px;
  padding: 15px 40px 15px 20px;
  color: #525252;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #fff 0%, #464747 #f9f9f9 100%);
  transition: width 0.4s ease;
  outline: none;
`

const StyledSvg = styled.svg`
  width: 1em;
  color: ${COLOR.PRIMARY};
  position: absolute;
  top: 16px;
  right: 10px;
`

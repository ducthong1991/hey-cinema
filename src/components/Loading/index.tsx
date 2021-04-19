import styled from 'styled-components'

const Loading = () => {
  return <StyledLoading data-testid="loading-wrapper" />
}

export default Loading

const StyledLoading = styled.div`
  z-index: 1000;
  position: fixed;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`

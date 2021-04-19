import styled from 'styled-components'

import { COLOR, Container } from '../../styled'

const Header = () => (
  <div data-testid="header-wrapper">
    <Container>
      <AppBar>
        <Title1>hey</Title1>
        <Title2>cinema</Title2>
      </AppBar>
    </Container>
  </div>
)

export default Header

const AppBar = styled.div`
  background: #fff;
  color: black;
  margin: 0px auto;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: 15px;
  padding-right: 15px;
  height: 60px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
`

const Title1 = styled(Title)`
  color: ${COLOR.PRIMARY};
  padding-top: 6px;
`
const Title2 = styled(Title)`
  color: ${COLOR.SECONDARY};
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import logo from '../../assets/Instagram_logo.png'

 const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`
const HomeLogo = styled.img`
    height: 80px;
    width: 80px;

`
function Header() {
  return (
    <NavContainer>
        <Link to="/Feed">
            <HomeLogo src= {logo} />
        </Link>
        <StyledLink to="/Feed">Feed</StyledLink>
    </NavContainer>
  )
}

export default Header
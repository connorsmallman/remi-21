import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 20px;
`;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 20px;
  text-transform: uppercase;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>REMI 21</Logo>
    <Nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/">
        About
      </Link>
      <Link to="/">
        Home
      </Link>
      <Link to="/">
        Contact
      </Link>
    </Nav>
  </HeaderContainer>
)

export default Header

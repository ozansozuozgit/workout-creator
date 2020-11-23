import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { useLocation } from 'react-router-dom';

const DIV = styled.nav`
  flex: ${({ path }) => (path === '/' ? '0' : 0.25)};
  @media (min-width: 1200px) {
    flex: 0.2;
  }
  @media (max-width: 768px) {
    flex: 0;
  }
`;

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <>
      <DIV path={location.pathname}>
        <Burger />
      </DIV>
    </>
  );
};

export default MobileNavbar;

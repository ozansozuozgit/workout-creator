import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { useLocation } from 'react-router-dom';

const DIV = styled.nav`
  flex: ${({ path }) => (path === '/' ? '1' : 0.25)};
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

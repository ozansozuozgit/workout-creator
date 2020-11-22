import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { useLocation } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;
const ExerciseNav = styled.nav`
  flex: 0.25;
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
`;

const MobileNavbar = () => {
  const [path, setPath] = useState('');
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
    // console.log(location.pathname);
  }, [location]);
  return (
    <>
      {path === '/' ? (
        <Nav>
          <Burger />
        </Nav>
      ) : (
        <ExerciseNav>
          <Burger />
        </ExerciseNav>
      )}
    </>
  );
};

export default MobileNavbar;

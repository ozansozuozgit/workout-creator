import React from 'react';
import styled from 'styled-components';
import HomeNavbar from '../HomeNavbar';
import ExerciseList from '../ExerciseList';
import { useLocation } from 'react-router-dom';

const DIV = styled.div`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (!open ? '0' : '1')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    z-index: 242;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const RightNav = ({ open }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <DIV open={open}>
          <HomeNavbar />
        </DIV>
      ) : (
        <DIV open={open}>
          <ExerciseList />
        </DIV>
      )}
    </>
  );
};

export default RightNav;

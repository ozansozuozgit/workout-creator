import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import ExerciseList from '../ExerciseList';
import { useLocation } from 'react-router-dom';

const DIV = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
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
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 242;
  }
`;

const EXERCISEDIV = styled.div`
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
        <DIV open={open}>
          <Navbar />
        </DIV>
      ) : (
        <EXERCISEDIV open={open}>
          <ExerciseList />
        </EXERCISEDIV>
      )}
    </>
  );
};

export default RightNav;

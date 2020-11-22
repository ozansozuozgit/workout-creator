import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

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

const RightNav = ({ open }) => {
  return (
    <DIV open={open}>
      <Navbar />
    </DIV>
  );
};

export default RightNav;

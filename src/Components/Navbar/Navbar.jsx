import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Navbar/logo_codice.png';
import Dado from '../../Assets/Navbar/dice.png';

const Container = styled.div`
  align-items: center;
  background-color: #02393e;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 5px;
  position: fixed;
  width: 100%;
`;

const Logomarca = styled.img`
  padding-left: 20px;
`;

const Dice = styled.img`
  padding-right: 170px;
`;

const Vazio = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Logomarca src={Logo} />
      <Dice src={Dado} />
      <Vazio />
    </Container>
  );
};

export default Navbar;

import React from 'react';
import styled from 'styled-components'

// styles
const Logo = styled.img`
  height: auto;
  width: 60px;
`

const myLogo = () => (
  <Logo src="../static/logo.png" alt="Callaloo Logo" />
);

export default myLogo;

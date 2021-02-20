import React from 'react';

import VerticalNav from '../../components/VerticalNav/VerticalNav';
import { LeftMenuContainer, Container } from './styles';
import logo from '../../config/logo';

export default function LeftMenu() {
  return (
      <LeftMenuContainer>
        <h1><i class={logo['class']}></i></h1>
        <Container>
            <VerticalNav/>
        </Container>
      </LeftMenuContainer>
  )
}

import React from 'react';

import MenuIcon from '../../components/MenuIcon/MenuIcon';
import { LeftMenuContainer, Container } from './styles';

const iconsClass = ['fas fa-bookmark', 'far fa-id-badge']

export default function LeftMenu() {
  return (
    <LeftMenuContainer>
      <h1><i class="fas fa-ticket-alt"></i></h1>
      <Container>
        <MenuIcon iconsClass={iconsClass}/>
      </Container>
    </LeftMenuContainer>
  )
}

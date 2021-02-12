import React from 'react';
import styled from 'styled-components';

import colours from '../../config/colours';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

const LeftMenuContainer = styled.div`
  background-color: ${colours.backgroundDark};
  width: 6%;
  text-align: center;
  flex: 1;
`;

const iconsClass = ['fas fa-bookmark', 'far fa-id-badge']

export default function LeftMenu() {
  return (
    <LeftMenuContainer>
      <MenuIcon iconsClass={iconsClass}/>
    </LeftMenuContainer>
  )
}

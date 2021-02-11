import React from 'react';

import { RightMenuContainer, ScrollableContainer } from './styles';
import Title from '../../components/Title/Title';
import CardPreview from '../../components/Card/CardPreview';

export default function RightMenu() {
  return (
    <RightMenuContainer>
      <h1>Nominations</h1>
      <ScrollableContainer>
        <CardPreview/>

      </ScrollableContainer>
    </RightMenuContainer>
  )
}

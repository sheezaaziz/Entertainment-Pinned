import React from 'react';

import { RightMenuContainer, ScrollableContainer } from './styles';
import SocialIconsRow from '../../components/SocialIconsRow/SocialIconsRow';
import CardPreviewDisplay from '../CardsDisplay/CardPreviewDisplay';

export default function RightMenu({ cards, removeFromList, message, socialIcons, postInfo }) {
  return (
    <RightMenuContainer>
      <h1>Pinned</h1>
      <ScrollableContainer>
        <CardPreviewDisplay cards={cards} removeFromList={removeFromList}/>
      </ScrollableContainer>
      <SocialIconsRow socialIcons={socialIcons} postInfo={postInfo}/>
    </RightMenuContainer>
  )
}

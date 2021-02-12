import React from 'react';

import { RightMenuContainer, ScrollableContainer } from './styles';
import Title from '../../components/Title/Title';
import CardPreview from '../../components/Card/CardPreview';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import SocialIconsRow from '../../components/SocialIconsRow/SocialIconsRow';
import CardPreviewDisplay from '../CardsDisplay/CardPreviewDisplay';

let socialMediaList = {'facebook': 'fab fa-facebook-f', 'twitter': 'fab fa-twitter', 'email': 'fas fa-paper-plane', 'link': 'fas fa-link'};

let cards = [1,2,3];

export default function RightMenu() {
  return (
    <RightMenuContainer>
      <h1>Nominations</h1>
      <ScrollableContainer>
        <CardPreviewDisplay cards={cards}/>
      </ScrollableContainer>
      <SocialIconsRow socialMediaList={socialMediaList}/>
    </RightMenuContainer>
  )
}
import React from 'react';

import { CardPreviewDisplayContainer } from './styles';
import CardPreview from '../../components/Card/CardPreview';

export default function CardPreviewDisplay({ cards, removeItem }) {
  let allCards = cards.map((card, index) => (
    <CardPreview
      title={card.Title}
      subtitle={card.Year}
      type={card.Type}
      img={card.Poster}
      id={card.imdbID}
      removeItem={removeItem}/>
  ))
  return (
    <CardPreviewDisplayContainer>
      {allCards}
    </CardPreviewDisplayContainer>
  )
}

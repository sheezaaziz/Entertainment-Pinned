import React from 'react';

import Card from '../../components/Card/Card';
import { CardsDisplayContainer } from './styles';

export default function CardsDisplay({ cards, addToList, disabled }) {
  let allCards = cards.map((card, index) => (
    <Card
      title={card.Title}
      subtitle={card.Year}
      type={card.Type}
      img={card.Poster}
      id={card.imdbID}
      addToList={addToList}
      disabled={disabled}/>
  ))
  return (
    <CardsDisplayContainer>{allCards}</CardsDisplayContainer>
  )
}

import React from 'react';

import Card from '../../components/Card/Card';
import { CardsDisplayContainer } from './styles';

export default function CardsDisplay({ cards, addToList, disabled }) {
  console.log(cards);
  let allCards = cards.map((card, index) => (
    <Card
      title={card.Title}
      subtitle={card.Year}
      type={card.Type}
      img={card.Poster}
      id={card.imdbID}
      addToList={addToList}
      disabled={disabled}
      preview={false}/>
  ))
  return (
    <CardsDisplayContainer>{allCards}</CardsDisplayContainer>
  )
}

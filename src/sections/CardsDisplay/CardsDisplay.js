import React from 'react';

import Card from '../../components/Card/Card';
import { CardsDisplayContainer } from './styles';

export default function CardsDisplay({ cards }) {
  let allCards = cards.map((card, index) => (
    <Card
      title={card.Title}
      subtitle={card.Year}
      type={card.Type}
      img={card.Poster}
      link={card.imdbID}/>
  ))
  return (
    <CardsDisplayContainer>{allCards}</CardsDisplayContainer>
  )
}

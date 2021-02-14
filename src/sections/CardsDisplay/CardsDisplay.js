import React from 'react';

import Card from '../../components/Card/Card';
import { CardsDisplayContainer } from './styles';

export default function CardsDisplay({ cards }) {
  console.log(cards);
  let allCards = cards.map((card, index) => (
    <Card/>
  ))
  return (
    <CardsDisplayContainer>{allCards}</CardsDisplayContainer>
  )
}

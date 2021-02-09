import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card/Card';

const CardsDisplayContainer = styled.div`
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: inline-block;
  margin: auto;
`;

export default function CardsDisplay({ cards }) {
  let allCards = cards.map((card, index) => (
    <Card/>
  ))
  return (
    <CardsDisplayContainer>{allCards}</CardsDisplayContainer>
  )
}

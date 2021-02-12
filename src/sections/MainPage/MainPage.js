import React from 'react';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import SearchInput from '../../components/SearchInput/SearchInput';
import NumResults from '../../components/NumResults/NumResults';
import CardsDisplay from '../CardsDisplay/CardsDisplay';


const cards = [1,2,3,4,5,6];

export default function MainPage() {
  return (
    <MainPageContainer>
      <Title>Home</Title>
      <SearchInput/>
      <br/>
      <NumResults num="0"/>
      <CardsDisplay cards={cards}/>
    </MainPageContainer>
  )
}

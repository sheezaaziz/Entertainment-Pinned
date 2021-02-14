import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import SearchInput from '../../components/SearchInput/SearchInput';
import NumResults from '../../components/NumResults/NumResults';
import CardsDisplay from '../CardsDisplay/CardsDisplay';

const cards = [1,2,3,4,5,6];

export default function MainPage({ querySearch, setQuerySearch, count, results }) {
  return (
    <MainPageContainer>
      <Title>Home</Title>
      <SearchInput querySearch={querySearch} setQuerySearch={setQuerySearch}/>
      <br/>
      <NumResults count={count}/>
      <CardsDisplay cards={results}/>
    </MainPageContainer>
  )
}

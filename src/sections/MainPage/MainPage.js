import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import SearchInput from '../../components/SearchInput/SearchInput';
import NumResults from '../../components/NumResults/NumResults';
import CardsDisplay from '../CardsDisplay/CardsDisplay';
import Loading from '../../components/Loading/Loading';

export default function MainPage({ querySearch, setQuerySearch, count, results, loading }) {
  return (
    <MainPageContainer>
      <Title>Home</Title>
      <SearchInput querySearch={querySearch} setQuerySearch={setQuerySearch}/>
      <br/>
      <NumResults count={count}/>
      { loading ? <Loading/> : <CardsDisplay cards={results}/> }
    </MainPageContainer>
  )
}

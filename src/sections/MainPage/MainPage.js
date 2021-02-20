import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import SearchInput from '../../components/SearchInput/SearchInput';
import NumResults from '../../components/NumResults/NumResults';
import CardsDisplay from '../CardsDisplay/CardsDisplay';
import Loading from '../../components/Loading/Loading';

export default function MainPage({ querySearch, setQuerySearch, count, results, loading, addToList, disabled, removeItem, title, saveItem }) {
  return (
    <MainPageContainer>
      <Title>{title}</Title>
      { setQuerySearch || querySearch ?
        <SearchInput querySearch={querySearch} setQuerySearch={setQuerySearch}/>
        :
        <span></span>
      }
      <NumResults count={count}/>
      { loading ? <Loading/> : <CardsDisplay cards={results} addToList={addToList} disabled={disabled} removeItem={removeItem} saveItem={saveItem}/> }
    </MainPageContainer>
  )
}

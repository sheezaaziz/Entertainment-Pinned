import React from 'react';
import styled from 'styled-components';

import SearchInput from '../../components/SearchInput/SearchInput';
import Title from '../../components/Title/Title';
import NumResults from '../../components/NumResults/NumResults';
import CardsDisplay from '../CardsDisplay/CardsDisplay';


const MainPageContainer = styled.div`
  flex: 9;
  padding: 10px;
  overflow: scroll;
`;

const cards = [1,2,3,4,5,6];

export default function MainPage() {
  return (
    <MainPageContainer>
      <Title title="Home"/>
      <SearchInput/>
      <br/>
      <NumResults num="0"/>
      <CardsDisplay cards={cards}/>
    </MainPageContainer>
  )
}

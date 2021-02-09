import React from 'react';
import styled from 'styled-components';

import Card from './components/Card/Card';
import NumResults from './components/NumResults/NumResults';
import SearchInput from './components/SearchInput/SearchInput';

import CardsDisplay from './sections/CardsDisplay/CardsDisplay';
import LeftMenu from './sections/LeftMenu/LeftMenu';
import MainPage from './sections/MainPage/MainPage';


const cards = [1,2,3,4,5,6];

const AppDisplay = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <AppDisplay>
      <LeftMenu/>
      <MainPage/>
    </AppDisplay>
  );
}

export default App;

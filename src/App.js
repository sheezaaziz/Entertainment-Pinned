import React from 'react';
import styled from 'styled-components';

import MobileNav from './components/MobileNav/MobileNav';
import LeftMenu from './sections/LeftMenu/LeftMenu';
import MainPage from './sections/MainPage/MainPage';
import RightMenu from './sections/RightMenu/RightMenu';
import GetMovies from './controllers/GetMovies';

const AppDisplay = styled.div`
  display: flex;
  height: 100vh;
`;

export default function App() {
  return (
    <div>
      <MobileNav/>
      <AppDisplay>
        <LeftMenu/>
        <GetMovies/>
        <RightMenu/>
      </AppDisplay>
    </div>

  );
}
// <MainPage/>

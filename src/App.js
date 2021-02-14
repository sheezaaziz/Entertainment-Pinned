import React from 'react';
import styled from 'styled-components';

import MobileNav from './components/MobileNav/MobileNav';
import LeftMenu from './sections/LeftMenu/LeftMenu';
import MainPage from './sections/MainPage/MainPage';
import RightMenu from './sections/RightMenu/RightMenu';

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
        <MainPage/>
        <RightMenu/>
      </AppDisplay>
    </div>

  );
}

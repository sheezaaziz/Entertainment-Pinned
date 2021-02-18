import React from 'react';
import styled from 'styled-components';

import MobileNav from './components/MobileNav/MobileNav';
import AppController from './controllers/AppController';

export default function App() {
  return (
    <div>
      <MobileNav/>
      <AppController/>
    </div>
  );
}

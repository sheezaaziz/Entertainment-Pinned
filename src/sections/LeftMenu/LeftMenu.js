import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import VerticalNav from '../../components/VerticalNav/VerticalNav';
import { LeftMenuContainer, Container } from './styles';

const iconsInfo = {
  'home': {
    'class': 'fas fa-home',
    'path': '/',
  },
  'save': {
    'class': 'fas fa-bookmark',
    'path': '/saved',
  },
  'contact': {
    'class': 'far fa-id-badge',
    'path': '/contact',
  },
}

export default function LeftMenu() {
  return (
      <LeftMenuContainer>
        <h1><i class="fas fa-ticket-alt"></i></h1>
        <Container>
            <VerticalNav iconsInfo={iconsInfo}/>
        </Container>
      </LeftMenuContainer>
  )
}

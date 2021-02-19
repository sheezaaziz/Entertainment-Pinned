import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';

const Ugh = styled.p`
  margin-left: 30px;
`;

export default function MainPageStill({ title }) {
  return (
    <MainPageContainer>
      <Title>{title}</Title>
      <Ugh>Hi, and welcome to Entertainment Pinned!</Ugh>
      <Ugh>Entertainment Pinned is my first ever React app built in order to learn React and React Hooks.</Ugh>
      <Ugh>This app allows users to search through the IMDb database and pin and/or save their favourite digital entertainment medias and share it to their social media accounts.</Ugh>
      <Ugh>To get started with this app, please go to the Home page and search any media you would expect to see in IMDb, e.g, 'The Avengers', and pin or save your top picks.</Ugh>
      <Ugh>Please note, there is a limit of 5 pins at a time for each user, but you can save as many as you like.</Ugh>
      <Ugh>Happy Pinning (or saving)!</Ugh>
    </MainPageContainer>
  )
}
// <p>This project was made with 💜 by Sheeza Aziz</p>
// <p>Check out the source code for this project:</p>
// <p>Connect with me on linkedin:</p>

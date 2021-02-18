import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';

export default function MainPageStill({ title }) {
  return (
    <MainPageContainer>
      <Title>{title}</Title>
    </MainPageContainer>
  )
}

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import ProjectGuide from '../../components/InfoTextPages/ProjectGuide';
import Contact from '../../components/InfoTextPages/Contact';

const Ugh = styled.p`
  margin-left: 30px;
`;

export default function MainPageStill({ title }) {
  return (
    <MainPageContainer>
      <Title>{title}</Title>
      { title === 'Contact' ? <Contact/> : <ProjectGuide/> }
    </MainPageContainer>
  )
}

import React from 'react';

import { MainPageContainer } from './styles';
import Title from '../../components/Title/Title';
import ProjectGuide from '../../components/InfoTextPages/ProjectGuide';
import Contact from '../../components/InfoTextPages/Contact';

export default function MainPageStill({ title }) {
  return (
    <MainPageContainer>
      <Title>{title}</Title>
      { title === 'Contact' ? <Contact/> : <ProjectGuide/> }
    </MainPageContainer>
  )
}

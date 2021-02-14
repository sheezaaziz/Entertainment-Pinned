import React from 'react';

import { Container, Loader } from './styles';
import LoadingImg from './LoadingImg.svg';

export default function Loading() {
  return (
    <Container>
      <Loader src={LoadingImg}/>
      <p>Loading...</p>
    </Container>
  )
}

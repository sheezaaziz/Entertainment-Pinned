import React from 'react';

import { H1Styled } from './styles';

export default function Title({children}) {
  return (
    <H1Styled>{children}</H1Styled>
  )
}

import React from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
  margin-top: 10px;
  margin-bottom: 8px;
  padding: 0;
  margin-left: 40px;
  font-weight: 800;
`;

export default function Title({title}) {
  return (
    <H1Styled>{title}</H1Styled>
  )
}

import React from 'react';
import styled from 'styled-components';

import colours from '../../config/colours';

const DisplayNumResults = styled.div`
  color: ${colours.primaryText};
  background-color: #1E1D33;
  display: inline-block;
  border-radius: 1.2em;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 10px;
  margin-left: 40px;
`;

export default function NumResults({ num }) {
  return (
    <DisplayNumResults>{ num } results</DisplayNumResults>
  )
}
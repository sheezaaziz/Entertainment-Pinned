import React from 'react';
import styled from 'styled-components';

import colours from '../../config/colours';

const SearchInputField = styled.input`
  margin-left: 40px;
  padding: 10px;
  border: none;
  width: 85%;
  font-size: 1em;
  background-color: ${colours.backgroundLight};
  color: #EEDFF8;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px ${colours.backgroundLight};
  }
`;

export default function SearchInput() {
  return (
    <SearchInputField type="text" placeholder="Search"></SearchInputField>
  )
}

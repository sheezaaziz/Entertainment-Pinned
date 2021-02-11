import styled from 'styled-components';

import colours from '../../config/colours';

export const SearchInputField = styled.input`
  margin-left: 40px;
  padding: 10px;
  border: none;
  width: 85%;
  font-size: 1em;
  background-color: ${colours.backgroundLight};
  color: ${colours.primaryText};

  &:focus {
    outline: none;
    box-shadow: 0 0 15px ${colours.backgroundLight};
  }
`;

import styled from 'styled-components';

import colours from '../../config/colours';

export const StyledLink = styled.a`
  text-decoration: underline;
  color: ${colours.primaryText};

  &:hover {
    font-size: 1.2em;
    -o-transition: 0.3s;
    -ms-transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
`;

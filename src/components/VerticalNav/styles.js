import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import colours from '../../config/colours';

export const StyledNavLink = styled(NavLink)`
  color: ${colours.backgroundLight};
  border-radius: 4em;
  border: 1px solid ${colours.backgroundLight};
  width: 55%;
  font-size: 14px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active, &:hover {
    background-color: ${colours.backgroundLight};
    color: ${colours.backgroundDark};
    -o-transition: 0.6s;
    -ms-transition: 0.6s;
    -moz-transition: 0.6s;
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
`;

import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import colours from '../../config/colours';

export const StyledNavLink = styled(NavLink)`
  color: ${colours.backgroundLight};
  border-radius: 3em;
  border: 1px solid ${colours.backgroundLight};
  width: 60%;
  font-size: 14px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    background-color: ${colours.backgroundLight};
    color: ${colours.backgroundDark};
  }
`;

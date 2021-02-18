import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { MenuItem, StyledNavLink } from './styles';

export default function VerticalNav({iconsInfo}) {
  const VerticalNavList = Object.keys(iconsInfo).map((key, val) => (
    <StyledNavLink exact to={iconsInfo[key]['path']}>
      <h2>
        <i class={iconsInfo[key]['class']}></i>
      </h2>
    </StyledNavLink>
  ))

  return (
    <div>{VerticalNavList}</div>
  )
}

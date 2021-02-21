import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuItem, StyledNavLink } from './styles';
import links from '../../config/links';

export default function VerticalNav() {
  const VerticalNavList = Object.keys(links).map((key, val) => (
    <StyledNavLink exact to={links[key]['path']} key={key}>
      <h2>
        <i className={links[key]['class']}></i>
      </h2>
    </StyledNavLink>
  ))

  return (
    <div>{VerticalNavList}</div>
  )
}

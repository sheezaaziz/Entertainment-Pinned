import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { MobileNavContainer, OpenMenu, MobileMenu, CloseMenu, StyledPrimaryLink, StyledNavLink } from './styles';
import links, { primaryLink } from '../../config/links';

export default function MobileNav() {
  const [MobileNavOpen, setMobileNavOpen] = useState(false);

  const NavList = Object.keys(links).map((key, val) => (
    <StyledNavLink exact to={links[key]['path']}>
      <i class={links[key]['class']}></i> {key}
    </StyledNavLink>
  ));

  return (
    <MobileNavContainer>
      <OpenMenu onClick={() => setMobileNavOpen(!MobileNavOpen)} MobileNavOpen={MobileNavOpen}><i class="fas fa-bars"></i></OpenMenu>
      <MobileMenu MobileNavOpen={MobileNavOpen}>
        {NavList}
        <CloseMenu onClick={() => setMobileNavOpen(!MobileNavOpen)}><i class="fas fa-times"></i></CloseMenu>
      </MobileMenu>
      <StyledPrimaryLink MobileNavOpen={MobileNavOpen} exact to={primaryLink['path']}><i class={primaryLink['class']}></i></StyledPrimaryLink>
    </MobileNavContainer>
  )
}

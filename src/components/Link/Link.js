import React from 'react';

import { StyledLink } from './styles';

export default function Link({ link, children }) {
  return (
    <StyledLink a href={link}>{ children }</StyledLink>
  )
}

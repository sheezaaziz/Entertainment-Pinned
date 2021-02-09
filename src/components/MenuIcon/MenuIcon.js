import React from 'react';
import styled from 'styled-components';

import colours from '../../config/colours';

const MenuItem = styled.div`
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
`;

export default function MenuIcon({iconsClass}) {
  let icons = iconsClass.map((icon, index) => (
    <MenuItem>
      <h2>
        <i class={icon}></i>
      </h2>
    </MenuItem>
  ))
  return (
    <div>{icons}</div>
  )
}

import React from 'react';

import { MenuItem } from './styles';

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

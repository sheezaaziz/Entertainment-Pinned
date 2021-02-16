import React from 'react';

import { SocialIconBtn } from './styles';

export default function SocialIcon({ socialIcons }) {
  return (
    <div>
      {Object.entries(socialIcons).map(([platform, iconClass]) =>
        <SocialIconBtn Platform={platform}><i class={iconClass}></i></SocialIconBtn>
      )}
    </div>
  )
}

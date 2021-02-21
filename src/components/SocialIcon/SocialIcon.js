import React from 'react';

import { SocialIconBtn } from './styles';

export default function SocialIcon({ socialIcons }) {
  return (
    <div>
      {Object.entries(socialIcons).map(([platform, iconClass]) =>
        <SocialIconBtn Platform={platform} key={platform}><i className={iconClass}></i></SocialIconBtn>
      )}
    </div>
  )
}

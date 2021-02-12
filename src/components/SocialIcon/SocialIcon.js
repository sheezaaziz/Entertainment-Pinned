import React from 'react';

import { SocialIconBtn } from './styles';

export default function SocialIcon({ socialMediaInfo }) {
  return (
    <div>
      {Object.entries(socialMediaInfo).map(([platform, iconClass]) =>
        <SocialIconBtn Platform={platform}><i class={iconClass}></i></SocialIconBtn>
      )}
    </div>
  )
}

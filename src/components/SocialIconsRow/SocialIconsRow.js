import React from 'react';

import { Container, SocialBtn } from './styles';

export default function SocialIconsRow({ socialMediaList }) {
  let allSocialMediaBtns = Object.entries(socialMediaList).map(([platform, iconClass]) =>
    <SocialBtn Platform={platform}><i class={iconClass}></i></SocialBtn>
  );
  return (
    <Container>
      { allSocialMediaBtns }
    </Container>
  )
}

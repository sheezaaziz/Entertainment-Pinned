import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

import { Container, SocialBtn } from './styles';

export default function SocialIconsRow({ socialIcons, postInfo }) {
  // let allSocialMediaBtns = Object.entries(socialIcons).map(([platform, iconClass]) =>
  //   <SocialBtn Platform={platform}><i class={iconClass}></i></SocialBtn>
  // );
  // console.log(socialIcons['facebook']);
  return (
    <Container>
      <SocialBtn Platform='facebook'>
        <FacebookShareButton
          url={postInfo['facebook']['url']}
          quote={postInfo['facebook']['post']}
          hashtag={postInfo['facebook']['hashtag']}>
          <i class={socialIcons['facebook']}></i>
        </FacebookShareButton>
      </SocialBtn>
      <SocialBtn Platform='twitter'>
        <TwitterShareButton
          title={postInfo['twitter']['post']}
          url={postInfo['twitter']['url']}
          hashtags={postInfo['twitter']['hashtags']}
          >
          <i class={socialIcons['twitter']}></i>
        </TwitterShareButton>
      </SocialBtn>
      <SocialBtn Platform='email'>
        <EmailShareButton
          subject={postInfo['email']['subject']}
          body={postInfo['email']['post']}
          url={postInfo['email']['url']}>
          <i class={socialIcons['email']}></i>
        </EmailShareButton>
      </SocialBtn>
      <SocialBtn Platform='link'>
        <i class={socialIcons['link']}></i>
      </SocialBtn>
    </Container>
  )
}

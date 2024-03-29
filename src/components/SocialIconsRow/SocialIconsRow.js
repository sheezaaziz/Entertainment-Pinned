import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton, RedditShareButton } from 'react-share';

import { Container, SocialBtn } from './styles';

export default function SocialIconsRow({ socialIcons, postInfo }) {
  return (
    <Container>
      <SocialBtn Platform='facebook'>
        <FacebookShareButton
          url={postInfo['facebook']['url']}
          quote={postInfo['facebook']['post']}
          hashtag={postInfo['facebook']['hashtag']}>
          <i className={socialIcons['facebook']}></i>
        </FacebookShareButton>
      </SocialBtn>
      <SocialBtn Platform='twitter'>
        <TwitterShareButton
          title={postInfo['twitter']['post']}
          url={postInfo['twitter']['url']}
          hashtags={postInfo['twitter']['hashtags']}
          >
          <i className={socialIcons['twitter']}></i>
        </TwitterShareButton>
      </SocialBtn>
      <SocialBtn Platform='email'>
        <EmailShareButton
          subject={postInfo['email']['subject']}
          body={postInfo['email']['post']}
          url={postInfo['email']['url']}>
          <i className={socialIcons['email']}></i>
        </EmailShareButton>
      </SocialBtn>
      <SocialBtn Platform='reddit'>
        <RedditShareButton
          url={postInfo['reddit']['url']}
          title={postInfo['reddit']['title']}>
          <i className="fab fa-reddit-alien"></i>
        </RedditShareButton>
      </SocialBtn>
    </Container>
  )
}

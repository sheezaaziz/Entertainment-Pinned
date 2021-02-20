import React from 'react';

import { Container } from './styles';

export default function ProjectGuide() {
  return (
    <Container>
      <p>Hi, and welcome to Entertainment Pinned!</p>
      <p>Entertainment Pinned is my first ever React app built in order to learn React and React Hooks.</p>
      <p>This app allows users to search through the IMDb database and pin and/or save their favourite digital entertainment medias and share it to their social media accounts.</p>
      <p>To get started with this app, please go to the Home page and search any media you would expect to see in IMDb, e.g, 'The Avengers', and pin or save your top picks.</p>
      <p>Please note, there is a limit of 5 pins at a time for each user, but you can save as many as you like.</p>
      <p>Happy Pinning (or saving)!</p>
    </Container>
  )
}

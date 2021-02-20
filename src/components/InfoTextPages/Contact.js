import React from 'react';

import { Container } from './styles';
import Link from '../Link/Link';

export default function Contact() {
  return (
    <Container>
      <p>This project was made with 💜 by <Link link="https://sheezaaziz.com/">Sheeza Aziz</Link></p>
      <p>Check out the source code for this project: <Link link="https://github.com/sheezaaziz"><i class="fab fa-github"></i>/sheezaaziz</Link></p>
      <p>Connect with me on linkedin: <Link link="https://www.linkedin.com/in/sheeza-aziz/"><i class="fab fa-linkedin-in"></i>/sheeza-aziz</Link></p>
      <p>Email me @: <Link link="mailto:sheeza.aziz@utoronto.ca">sheeza.aziz@utoronto.ca</Link></p>
    </Container>
  )
}

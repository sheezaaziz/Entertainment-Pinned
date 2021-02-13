import React from 'react';

import { CardDiv, CardImg, CardDetails, CardDetailsDescr, CardTitle, CardSubtitle, CardDetailsMore, CardRating, CardExternalLink, CardBtns, CardBtn } from './styles';

export default function Card() {
  return (
    <CardDiv>
      <CardImg src="https://source.unsplash.com/random" alt=""/>
      <CardDetails>
        <CardDetailsDescr>
          <CardTitle>Inception</CardTitle>
          <CardSubtitle>2019</CardSubtitle>
        </CardDetailsDescr>
        <CardDetailsMore>
          <CardRating>4.5/10</CardRating>
          <CardExternalLink href="#">info <i className="fas fa-external-link-alt"></i></CardExternalLink>
        </CardDetailsMore>
      </CardDetails>
      <CardBtns>
        <CardBtn Order={1}><i className="fas fa-bookmark"></i></CardBtn>
        <CardBtn Order={2}><i className="fas fa-trophy"></i></CardBtn>
      </CardBtns>
    </CardDiv>
  )
}

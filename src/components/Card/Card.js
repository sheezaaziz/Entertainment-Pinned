import React from 'react';

import { CardDiv, CardImg, CardDetails, CardDetailsDescr, CardTitle, CardSubtitle, CardDetailsMore, CardRating, CardExternalLink, CardBtns, CardBtn } from './styles';
import Image_Unavailable from './Image_Unavailable.jpg';

export default function Card({ title, subtitle, type, img, link }) {
  let externalLink = `https://www.imdb.com/title/${link}`;
  if (img === 'N/A') {
    img = Image_Unavailable;
  }
  return (
    <CardDiv>
      <CardImg src={img} alt={title}/>
      <CardDetails>
        <CardDetailsDescr>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardDetailsDescr>
        <CardDetailsMore>
          <CardRating>{type}</CardRating>
          <CardExternalLink href={externalLink} target="_blank">info <i className="fas fa-external-link-alt"></i></CardExternalLink>
        </CardDetailsMore>
      </CardDetails>
      <CardBtns>
        <CardBtn Order={1}><i className="fas fa-bookmark"></i></CardBtn>
        <CardBtn Order={2}><i className="fas fa-trophy"></i></CardBtn>
      </CardBtns>
    </CardDiv>
  )
}

import React from 'react';

import { CardDivPreview, CardImgPreview, CardDetails, CardDetailsDescr, CardTitle, CardSubtitle, CardDetailsMore, CardRating, CardExternalLink, CardBtns, CardBtnPreview } from './styles';


export default function CardPreview() {
  return (
    <CardDivPreview>
      <CardImgPreview src="https://source.unsplash.com/random" alt=""/>
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
        <CardBtnPreview nominate><i className="fas fa-times"></i></CardBtnPreview>
      </CardBtns>
    </CardDivPreview>
  )
}

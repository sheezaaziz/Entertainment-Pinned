import React from 'react';

import { CardDivPreview, CardImgPreview, CardDetails, CardDetailsDescr, CardTitle, CardSubtitle, CardDetailsMore, CardType, CardExternalLink, CardBtns, CardBtnPreview } from './styles';
import Image_Unavailable from './Image_Unavailable.jpg';

export default function CardPreview({ title, subtitle, type, img, id, removeItem }) {
  let externalLink = `https://www.imdb.com/title/${id}`;
  if (img === 'N/A') {
    img = Image_Unavailable;
  }
  return (
    <CardDivPreview>
      <CardImgPreview src={img} alt={title}/>
      <CardDetails>
        <CardDetailsDescr>
          <CardTitle>{ title }</CardTitle>
          <CardSubtitle>{ subtitle }</CardSubtitle>
        </CardDetailsDescr>
        <CardDetailsMore>
          <CardType>{ type }</CardType>
          <CardExternalLink href={externalLink} target="_blank">info <i className="fas fa-external-link-alt"></i></CardExternalLink>
        </CardDetailsMore>
      </CardDetails>
      <CardBtns>
        <CardBtnPreview
          onClick={() => removeItem(id, 'Nominations')}>
          <i className="fas fa-times"></i>
        </CardBtnPreview>
      </CardBtns>
    </CardDivPreview>
  )
}

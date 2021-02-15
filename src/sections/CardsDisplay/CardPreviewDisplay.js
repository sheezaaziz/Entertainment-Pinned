import React from 'react';

import CardPreview from '../../components/Card/CardPreview';

export default function CardPreviewDisplay({ cards, removeFromList }) {
  console.log(cards);
  let allCards = cards.map((card, index) => (
    // console.log(card.Title, card.Year, card.Type, card.Poster, card.imdbID)
    <CardPreview
      title={card.Title}
      subtitle={card.Year}
      type={card.Type}
      img={card.Poster}
      id={card.imdbID}
      removeFromList={removeFromList}/>
  ))
  return (
    <div>
      {allCards}
    </div>
  )
}

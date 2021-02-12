import React from 'react';

import CardPreview from '../../components/Card/CardPreview';

export default function CardPreviewDisplay({ cards }) {
  let allCards = cards.map((card, index) => (
    <CardPreview/>
  ))
  return (
    <div>
      {allCards}
    </div>
  )
}

import React from 'react';

import { DisplayNumResults } from './styles';

export default function NumResults({ count }) {
  return (
    <DisplayNumResults>{ count } results</DisplayNumResults>
  )
}

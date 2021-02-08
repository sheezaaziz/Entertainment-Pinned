import React from 'react';

import Card from './components/Card/Card';
import NumResults from './components/NumResults/NumResults';

function App() {
  return (
    <div className="App">
      <Card/>
      <NumResults num="48"/>
    </div>
  );
}

export default App;

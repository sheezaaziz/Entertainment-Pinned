import React from 'react';

import Card from './components/Card/Card';
import NumResults from './components/NumResults/NumResults';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  return (
    <div className="App">
      <Card/>
      <NumResults num="48"/>
      <SearchInput/>
    </div>
  );
}

export default App;

import { useState } from 'react';

import QRcode from './util/QRcode';

function App() {

  console.log('QRcode', QRcode.numberEncode('01234567'));

  return (
    <div className="App">
      QRcode
    </div>
  );
}

export default App;

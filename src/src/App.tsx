import { GlobalContainer } from '../src/global/globalstyled'
import './style.css'
import React from 'react';

import Rotas from "./routes/routes";

function App() {
  return (
    <GlobalContainer>
      <Rotas />
    </GlobalContainer>
  );
}

export default App;

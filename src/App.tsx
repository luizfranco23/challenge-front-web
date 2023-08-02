import { GlobalContainer } from '../src/global/globalstyled'
import './style.css'
import React from 'react';

import Rotas from "./routes/routes";
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <GlobalContainer>
        <Rotas />
      </GlobalContainer>
    </CartProvider>
  );
}

export default App;

// Importação das bibliotecas e estilos
import * as S from './style';
import React, { useState } from 'react';

// Interface para o tipo da faixa de preço
interface PriceRange {
  id: number;
  label: string;
  min: number;
  max: number;
}

// Componente FilterPrice
export function FilterPrice() {
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);

  const priceRanges: PriceRange[] = [
    { id: 1, label: 'Até R$40', min: 0, max: 40 },
    { id: 2, label: 'R$40 a R$60', min: 40, max: 60 },
    { id: 3, label: 'R$100 a R$200', min: 100, max: 200 },
    { id: 4, label: 'R$200 a R$500', min: 200, max: 500 },
    { id: 5, label: 'Acima de R$500', min: 500, max: Infinity },
  ];

  function handlePriceRangeChange(range: PriceRange) {
    setSelectedPriceRange(range);
  }

  return (
    <S.PriceContainer>
      <S.Title>
        <h1>Refina sua busca</h1>
        <h3>Por preço</h3>
      </S.Title>
      <S.ContainerPrice>
        {priceRanges.map(range => (
          <label key={range.id}>
            <input
              type="radio"
              name="priceRange"
              value={range.id}
              checked={selectedPriceRange?.id === range.id}
              onChange={() => handlePriceRangeChange(range)}
            />
            {range.label}
          </label>
        ))}
      </S.ContainerPrice>
    </S.PriceContainer>
  );
}

import * as S from './style';
import React, { useState } from 'react';

export function FilterPrice() {
  const [selectedRange, setSelectedRange] = useState(null);
  const priceRanges = [
    { id: 1, label: 'Até R$40', min: 0, max: 40 },
    { id: 2, label: 'R$40 a R$60', min: 40, max: 60 },
    { id: 3, label: 'R$100 a R$200', min: 100, max: 200 },
    { id: 4, label: 'R$200 a R$500', min: 200, max: 500 },
    { id: 5, label: 'Acima de R$500', min: 500, max: Infinity },
  ];

  function handlePriceRangeChange(rangeId: any) {
    setSelectedRange(rangeId);
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
              checked={selectedRange === range.id}
              onChange={() => handlePriceRangeChange(range.id)}
            />
            {range.label}
          </label>
        ))}
      </S.ContainerPrice>

    </S.PriceContainer>
  );
}

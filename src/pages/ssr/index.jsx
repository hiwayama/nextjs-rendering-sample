import React, { useState, useEffect } from 'react';
import initValue from '../../../seed';

export default function SSR(props) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(initValue());
  });
  const increment = () => {
    setVal(val + 1);
  };
  const name = 'ssr';
  return (
    <div>
      <div>
        Hello! <span>{name}</span>
        {val}
      </div>
      <button
        onClick={() => {
          increment();
        }}>
        click
      </button>
    </div>
  );
}

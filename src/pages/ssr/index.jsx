import React, { useState } from 'react';
import initValue from '../../../seed';

export default function SSR(props) {
  const [val, setVal] = useState(initValue());
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

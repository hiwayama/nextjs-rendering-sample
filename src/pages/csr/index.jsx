import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import initValue from '../../../seed';

function CSRContent() {
  const [val, setVal] = useState(initValue());
  const increment = () => {
    setVal(val + 1);
  };
  const name = 'world';
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

export default dynamic(() => Promise.resolve(CSRContent), { ssr: false });

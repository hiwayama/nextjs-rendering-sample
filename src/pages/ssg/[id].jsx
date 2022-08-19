import React, { useState } from 'react';
import initValue from '../../../seed';

export async function getStaticProps({params}) {
  return {
    props: {
      id: parseInt(params.id),
    }
  };
}

export async function getStaticPaths() {
  const paths = [...Array(10)].map((_) => { return `/ssg/${initValue()}` });
  return {
    paths, fallback: false
  } 
}

export default function SSG({ id }) {
  const [val, setVal] = useState(id);
  const increment = () => {
    setVal(val + 1);
  };
  const name = 'ssg';
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

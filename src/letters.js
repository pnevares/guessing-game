import React from 'react';

export default ({ letters }) => (
  <p>
    {letters.map((letter, index) => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          console.log(`${letter} clicked`);
        }}
        key={index}
        style={{paddingRight: '5px'}}
      >
        {letter}
      </a>
    ))}
  </p>
);

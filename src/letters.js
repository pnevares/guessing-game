import React from 'react';

export default ({ letters }) => (
  <p>
    {letters.map(letter => `${letter} `)}
  </p>
);

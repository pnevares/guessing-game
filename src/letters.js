/* eslint-disable jsx-a11y/anchor-is-valid, no-console */

import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({ letters }) => (
  <p>
    {letters.map(letter => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          console.log(`${letter} clicked`);
        }}
        key={letter}
        style={{ paddingRight: '5px' }}
      >
        {letter}
      </a>
    ))}
  </p>
);

Letters.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Letters;

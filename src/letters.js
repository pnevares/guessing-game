/* eslint-disable jsx-a11y/anchor-is-valid, no-console */

import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({ letters, clickHandler }) => (
  <p>
    {letters.map(letter => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          const matched = clickHandler(letter);
          if (matched) {
            e.target.style.color = '#7f7';
          } else {
            e.target.style.color = '#f00';
          }
          e.target.style.textDecoration = 'none';
          e.target.style.cursor = 'default';
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
  clickHandler: PropTypes.func.isRequired,
};

export default Letters;

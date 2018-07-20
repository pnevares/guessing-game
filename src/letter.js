/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, clickHandler, used }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if (used) {
        return;
      }

      const matched = clickHandler(letter);
      if (matched === undefined) {
        return;
      }

      if (matched) {
        e.target.style.color = '#7f7';
      } else {
        e.target.style.color = '#f00';
      }
      e.target.style.textDecoration = 'none';
      e.target.style.cursor = 'default';
    }}
    style={{ paddingRight: '5px' }}
  >
    {letter}
  </a>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  used: PropTypes.bool.isRequired,
};

export default Letter;

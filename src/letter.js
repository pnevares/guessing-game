/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, clickHandler, used }) => (
  <button
    type="button"
    onClick={() => clickHandler(letter) }
    disabled={used}
  >
    {letter}
  </button>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  used: PropTypes.bool.isRequired,
};

export default Letter;

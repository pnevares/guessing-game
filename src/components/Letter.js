import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Letter = memo(({ clickHandler, letter, used }) => (
  <button
    disabled={used}
    onClick={() => clickHandler(letter)}
    type="button"
  >
    {letter}
  </button>
));

Letter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired,
  used: PropTypes.bool.isRequired,
};

export default Letter;

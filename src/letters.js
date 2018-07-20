import React from 'react';
import PropTypes from 'prop-types';
import Letter from './letter';

const Letters = ({ letters, clickHandler }) => (
  <p>
    {letters.map(letter => (
      <Letter
        key={letter}
        letter={letter}
        clickHandler={clickHandler}
      />
    ))}
  </p>
);

Letters.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Letters;

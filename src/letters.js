import React from 'react';
import PropTypes from 'prop-types';
import Letter from './letter';

const Letters = ({ letters, usedLetters, clickHandler }) => (
  <p>
    {letters.map(letter => (
      <Letter
        key={letter}
        letter={letter}
        clickHandler={(l) => {
          usedLetters.push(l);
          return clickHandler(l);
        }}
        used={usedLetters.indexOf(letter) !== -1}
      />
    ))}
  </p>
);

Letters.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  usedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Letters;

import React from 'react';
import PropTypes from 'prop-types';
import Letter from './letter';

const Letters = ({ clickHandler, letters, usedLetters }) => (
  <p>
    {letters.map(letter => (
      <Letter
        clickHandler={(l) => {
          usedLetters.push(l);
          return clickHandler(l);
        }}
        key={letter}
        letter={letter}
        used={usedLetters.indexOf(letter) !== -1}
      />
    ))}
  </p>
);

Letters.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  usedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Letters;

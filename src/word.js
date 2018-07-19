import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, matches }) => (
  <p>
    {word.split('').map((letter, index) => (
      <span
        style={{ paddingRight: '5px' }}
        key={`${letter}${index}`}
      >
        { matches[index] ? letter : '_'}
      </span>
    ))}
  </p>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  matches: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Word;

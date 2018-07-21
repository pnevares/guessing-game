/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, matches }) => (
  <p>
    {word.split('').map((letter, index) => (
      <span
        style={{ marginRight: '5px' }}
        key={`${letter}${index}`}
      >
        { matches[index] ? letter : '_'}
      </span>
    ))}
  </p>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  matches: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default Word;

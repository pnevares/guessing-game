/* eslint-disable react/no-array-index-key */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Word = memo(({ matches, word }) => (
  <p>
    {word.split('').map((letter, index) => (
      <span key={`${letter}${index}`}>
        { matches[index] ? letter : '_' }
      </span>
    ))}
  </p>
));

Word.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.bool).isRequired,
  word: PropTypes.string.isRequired,
};

export default Word;

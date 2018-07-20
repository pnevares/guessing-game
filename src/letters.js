import React from 'react';
import PropTypes from 'prop-types';
import Letter from './letter';

class Letters extends React.Component {
  constructor() {
    super();
    this.state = {
      usedLetters: [],
    };
  }

  render() {
    const { letters, clickHandler } = this.props;
    const { usedLetters } = this.state;
    return (
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
  }
}

Letters.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Letters;

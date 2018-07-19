import React from 'react';
import Strikes from './strikes';
import Word from './word';
import Letters from './letters';
import randomWord from './randomWord';
import randomLetters from './randomLetters';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = this.getInitialState();
  }

  getInitialState() {
    const word = randomWord();

    return {
      word,
      letters: randomLetters(word),
      strikes: 4,
      // matches: Array(word.length).fill(0),
      matches: [0, 0, 1, 1, 0, 0],
    };
  }

  reset() {
    this.state = this.getInitialState();
  }

  render() {
    const {
      strikes,
      word,
      letters,
      matches,
    } = this.state;

    return (
      <div style={{ fontFamily: 'monospace', fontSize: '2em' }}>
        <Strikes count={strikes} />
        <Word word={word} matches={matches} />
        <Letters letters={letters} />
        <button type="button" onClick={() => this.reset()}>
          {'Reset'}
        </button>
      </div>
    );
  }
}

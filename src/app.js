import React from 'react';
import Strikes from './strikes';
import Word from './word';
import Letters from './letters';
import randomWord from './randomWord';
import randomLetters from './randomLetters';

export default class App extends React.Component {
  constructor() {
    super();

    const word = randomWord();

    this.state = {
      word,
      letters: randomLetters(word),
      strikes: 4,
      matches: Array(word.length).fill(0),
    };
  }

  reset() {
    this.state = {};
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
      </div>
    );
  }
}

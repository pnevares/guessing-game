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
    this.onLetterClick = this.onLetterClick.bind(this);
  }

  getInitialState() {
    const word = randomWord();

    return {
      word,
      letters: randomLetters(word),
      strikes: 0,
      matches: Array(word.length).fill(false),
      usedLetters: [],
      done: false,
    };
  }

  onLetterClick(letter) {
    const {
      word,
      strikes,
      matches,
      usedLetters,
      done,
    } = this.state;

    if (done) {
      return undefined;
    }

    usedLetters.push(letter);

    let newStrikes = strikes;
    const matched = word.split('').reduce((m, c, i) => {
      if (c === letter) {
        matches[i] = true;
        return true;
      }
      return m;
    }, false);

    if (!matched) {
      newStrikes += 1;
    }

    const newDone = newStrikes === 6 || matches.filter(c => !c).length === 0;

    this.setState({
      strikes: newStrikes,
      matches,
      done: newDone,
    });

    return matched;
  }

  reset() {
    this.setState(this.getInitialState());
  }

  render() {
    const {
      strikes,
      word,
      letters,
      matches,
      usedLetters,
      done,
    } = this.state;

    return (
      <div style={{ fontFamily: 'monospace', fontSize: '2em' }}>
        <Strikes count={strikes} />
        <Word word={word} matches={matches} />
        <Letters letters={letters} usedLetters={usedLetters} clickHandler={this.onLetterClick} />
        <button type="button" onClick={() => this.reset()}>
          {'Reset'}
        </button>
        {done && ' Game over!'}
      </div>
    );
  }
}

import React from 'react';
import Letters from './letters';
import Strikes from './strikes';
import Word from './word';
import randomLetters from './randomLetters';
import randomWord from './randomWord';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = this.getInitialState();
    this.onLetterClick = this.onLetterClick.bind(this);
  }

  getInitialState() {
    const word = randomWord();

    return {
      done: false,
      letters: randomLetters(word),
      matches: Array(word.length).fill(false),
      strikes: 0,
      usedLetters: [],
      word,
    };
  }

  onLetterClick(letter) {
    const {
      done,
      matches,
      strikes,
      usedLetters,
      word,
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
      done: newDone,
      matches,
      strikes: newStrikes,
    });

    return matched;
  }

  reset() {
    this.setState(this.getInitialState());
  }

  render() {
    const {
      done,
      letters,
      matches,
      strikes,
      usedLetters,
      word,
    } = this.state;

    return (
      <div>
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

import React, { PureComponent } from "react";
import Letters from "./Letters";
import Strikes from "./Strikes";
import Word from "./Word";
import randomLetters from "../randomLetters";
import randomWord from "../randomWord";

export default class App extends PureComponent {
  state = this.getInitialState();

  getInitialState() {
    const word = randomWord();

    return {
      done: false,
      letters: randomLetters(word),
      matches: Array(word.length).fill(false),
      strikes: 0,
      usedLetters: [],
      word
    };
  }

  onLetterClick = letter => {
    const { done, matches, strikes, usedLetters, word } = this.state;

    if (done) {
      return null;
    }

    let newStrikes = strikes;
    const newMatches = matches.slice();
    const newUsedLetters = usedLetters.concat(letter);

    const matched = word.split("").reduce((m, c, i) => {
      if (c === letter) {
        newMatches[i] = true;
        return true;
      }
      return m;
    }, false);

    if (!matched) {
      newStrikes += 1;
    }

    const newDone = newStrikes === 6 || newMatches.filter(c => !c).length === 0;

    this.setState({
      done: newDone,
      matches: newMatches,
      strikes: newStrikes,
      usedLetters: newUsedLetters
    });

    return matched;
  };

  onResetClick = () => {
    this.setState(this.getInitialState());
  };

  render() {
    const { done, letters, matches, strikes, usedLetters, word } = this.state;

    return (
      <div>
        <Strikes count={strikes} />
        <Word word={word} matches={matches} />
        <Letters
          letters={letters}
          usedLetters={usedLetters}
          clickHandler={this.onLetterClick}
        />
        <button type="button" onClick={this.onResetClick}>
          Reset
        </button>
        {done && " Game over!"}
      </div>
    );
  }
}

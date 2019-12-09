import React, { useState } from "react";
import Letters from "./Letters";
import Strikes from "./Strikes";
import Word from "./Word";
import { version } from '../../package.json';
import randomLetters from "../randomLetters";
import randomWord from "../randomWord";

const initialState = () => {
  const word = randomWord();

  return {
    done: false,
    letters: randomLetters(word),
    matches: Array(word.length).fill(false),
    strikes: 0,
    usedLetters: [],
    word
  };
};

export default function App() {
  const defaultState = initialState();
  const [done, setDone] = useState(defaultState.done);
  const [letters, setLetters] = useState(defaultState.letters);
  const [matches, setMatches] = useState(defaultState.matches);
  const [strikes, setStrikes] = useState(defaultState.strikes);
  const [usedLetters, setUsedLetters] = useState(defaultState.usedLetters);
  const [word, setWord] = useState(defaultState.word);

  const onLetterClick = letter => {
    if (done) {
      return;
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

    setDone(newDone);
    setMatches(newMatches);
      setStrikes(newStrikes);
      setUsedLetters(newUsedLetters);
  };

  const reset = () => {
    setDone(defaultState.done);
    setLetters(defaultState.letters);
    setMatches(defaultState.matches);
    setStrikes(defaultState.strikes);
    setUsedLetters(defaultState.usedLetters);
    setWord(defaultState.word);
  };

  return (
    <div>
      <h1>
        Guessing Game v
        {version}
      </h1>
      <Strikes count={strikes} />
      <Word word={word} matches={matches} />
      <Letters
        letters={letters}
        usedLetters={usedLetters}
        clickHandler={onLetterClick}
      />
      <button type="button" onClick={reset}>
        Reset
      </button>
      {strikes === 6 && " Game over!"}
      {matches.filter(c => !c).length === 0 && " Well done!"}
    </div>
  );
}

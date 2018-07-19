import React from 'react';
import Strikes from './strikes';
import Word from './word';
import Letters from './letters';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Strikes count={1} />
        <Word />
        <Letters letters={['A', 'B', 'C', 'D', 'E', 'F']} />
      </div>
    );
  }
}

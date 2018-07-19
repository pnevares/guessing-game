import React from 'react';

export default class Strikes extends React.Component {
  renderStrikes() {
    const { count } = this.props;
    const strikes = [];

    for (let i = 0; i < 6; i++) {
      const color = i < count ? '#f00' : '#ccc';
      strikes.push(
        <span
          style={{ marginRight: '5px', color }}
          key={i}
        >
          X
        </span>,
      );
    }
    return strikes;
  }

  render() {
    return this.renderStrikes();
  }
}

import React from 'react';
import PropTypes from 'prop-types';

export default class Strikes extends React.Component {
  renderStrikes() {
    const { count } = this.props;
    const strikes = [];

    for (let i = 0; i < 6; i += 1) {
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

Strikes.propTypes = {
  count: PropTypes.number.isRequired,
};

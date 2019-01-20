import React, { memo } from "react";
import PropTypes from "prop-types";

const Strikes = memo(({ count }) => {
  const strikes = [];

  for (let i = 0; i < 6; i += 1) {
    const status = i < count ? "wrong" : "default";
    strikes.push(
      <span className={status} key={i}>
        X
      </span>
    );
  }
  return strikes;
});

Strikes.propTypes = {
  count: PropTypes.number.isRequired
};

export default Strikes;

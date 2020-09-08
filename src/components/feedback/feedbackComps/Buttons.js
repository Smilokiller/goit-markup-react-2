import React, { Fragment } from "react";

function Statistics(prop) {
  return (
    <Fragment>
      <button onClick={prop.goodIncrement}>Good</button>
      <button onClick={prop.neutralIncrement}>Neutral</button>
      <button onClick={prop.badIncrement}>Bad</button>
    </Fragment>
  );
}

export default Statistics;

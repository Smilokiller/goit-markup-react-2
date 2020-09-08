import React, { Fragment } from "react";

function Statistics(prop) {
  return (
    <Fragment>
      <p>Good: {prop.good}</p>
      <p>Neutral: {prop.neutral}</p>
      <p>Bad: {prop.bad}</p>
      <p>Total: {prop.total}</p>
      <p>Positive feedback: {prop.positivePercentage}%</p>
    </Fragment>
  );
}

export default Statistics;

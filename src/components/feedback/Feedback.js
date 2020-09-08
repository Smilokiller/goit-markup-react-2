import React, { Component } from "react";
import Statistics from "./feedbackComps/Statistics";
import Buttons from "./feedbackComps/Buttons";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodIncrement = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    }, this.countTotalFeedback);
  };

  neutralIncrement = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    }, this.countTotalFeedback);
  };
  badIncrement = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    this.setState({ total: total }, this.countPositiveFeedbackPercentage);
  };

  countPositiveFeedbackPercentage = () => {
    const positive = (this.state.good * 100) / this.state.total;
    this.setState({ positive: positive });
  };

  render() {
    let drowStat;
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      drowStat = <p>No feedback given</p>;
    } else {
      drowStat = (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positive}
        ></Statistics>
      );
    }

    return (
      <div>
        <h2>Please leave feedback</h2>
        <Buttons
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
        ></Buttons>
        <h2>Statistics</h2>
        {drowStat}
      </div>
    );
  }
}

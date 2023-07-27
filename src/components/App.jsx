import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import {Statistics} from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const feedback = e.target.dataset.value;
    this.setState((prevState) => {
      return {[feedback]: prevState[feedback] + 1}
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / (this.countTotalFeedback())) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state, onLeaveFeedback, countPositiveFeedbackPercentage, countTotalFeedback } = this;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <br />
        <Section title='Statistics'>
          {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}/>
            :
            <Notification message='There is no feedback' />}
        </Section>
      </>
    )
  }
};

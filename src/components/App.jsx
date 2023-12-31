import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import {Statistics} from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const leaveFeedback = evt => {
    const key = evt.target.textContent.toLowerCase();
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / (countTotalFeedback())) * 100).toFixed(0);
  };

  return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(options)} onLeaveFeedback={leaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}/>
            :
            <Notification message='There is no feedback' />}
        </Section>
      </>
  )
};

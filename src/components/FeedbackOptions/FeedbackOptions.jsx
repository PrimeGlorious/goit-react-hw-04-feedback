import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnList>
    {options.map((option) => (
      <li key={option}><Button data-value={option} onClick={onLeaveFeedback}>{option}</Button></li>
    ))}
  </BtnList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

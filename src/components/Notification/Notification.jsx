import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <>
    <p><b>{message}</b></p>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

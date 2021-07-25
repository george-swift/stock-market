import PropTypes from 'prop-types';

const FlashMessage = ({ children }) => (
  <div className="alert alert-danger" role="alert">
    { children }
  </div>
);

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlashMessage;

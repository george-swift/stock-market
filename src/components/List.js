import PropTypes from 'prop-types';

const Company = ({ symbol, name, exchange }) => (
  <li>
    <div className="company">
      <p className="text-warning">{symbol}</p>
      <h4 className="my-1">{name}</h4>
      <small className="fst-italic text-secondary">{exchange}</small>
    </div>
    <button
      type="button"
      className="btn btn-sm btn-outline-light text-info"
    >
      See Profile
    </button>
  </li>
);

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default Company;

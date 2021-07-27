import PropTypes from 'prop-types';
import { EXCHANGE } from '../constants';

export default function ExchangeFilter({ filterExchange }) {
  const exchange = ['All Markets', ...EXCHANGE];

  const handleFilterChange = (e) => {
    const { value } = e.target;
    filterExchange(value);
  };

  return (
    <select
      className="form-select my-3"
      onChange={handleFilterChange}
    >
      {
        exchange.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))
      }
    </select>
  );
}

ExchangeFilter.propTypes = {
  filterExchange: PropTypes.func.isRequired,
};

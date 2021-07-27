import PropTypes from 'prop-types';

const List = ({
  symbol,
  name,
  exchange,
  getUrl,
}) => (
  <li>
    <div className="company">
      <p className="text-white-50">{symbol}</p>
      <h4 className="my-1">{name}</h4>
      <small className="fst-italic text-white-50">{exchange}</small>
    </div>
    <button
      type="button"
      className="btn btn-sm btn-outline-light"
      onClick={() => getUrl(symbol)}
    >
      See Profile
    </button>
  </li>
);

List.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  getUrl: PropTypes.func.isRequired,
};

export default List;

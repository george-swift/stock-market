import PropTypes from 'prop-types';

const Constituent = ({
  symbol,
  name,
  sector,
  hq,
  getUrl,
}) => (
  <tr>
    <th scope="row">{symbol}</th>
    <td>{name}</td>
    <td>{sector}</td>
    <td>{hq || '...'}</td>
    <td>
      <button
        type="button"
        className="btn btn-sm btn-outline-dark"
        onClick={() => getUrl(symbol)}
      >
        Get Data
      </button>
    </td>
  </tr>
);

Constituent.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  hq: PropTypes.string,
  getUrl: PropTypes.func.isRequired,
};

Constituent.defaultProps = { hq: '' };

export default Constituent;

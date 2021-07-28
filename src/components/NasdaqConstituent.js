import PropTypes from 'prop-types';

const Constituent = ({
  symbol,
  name,
  sector,
  hq,
  getUrl,
}) => (
  <tr role="gridcell" onClick={() => getUrl(symbol)}>
    <th scope="row">{symbol}</th>
    <td>{name}</td>
    <td>{sector}</td>
    <td>{hq || '...'}</td>
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

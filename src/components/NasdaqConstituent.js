import PropTypes from 'prop-types';

const Company = ({
  symbol,
  name,
  sector,
  hq,
}) => (
  <tr>
    <th scope="row">{symbol}</th>
    <td>{name}</td>
    <td>{sector}</td>
    <td>{hq || '- -'}</td>
    <td>
      <button
        type="button"
        className="btn btn-sm btn-outline-dark"
      >
        Get Data
      </button>
    </td>
  </tr>
);

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  hq: PropTypes.string,
};

Company.defaultProps = { hq: '- -' };

export default Company;

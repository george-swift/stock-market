import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({
  symbol,
  name,
  exchange,
  getUrl,
}) => (
  <li>
    <div className="company">
      <div>
        <p>{symbol}</p>
        <h4 className="my-1">
          <Link
            to={`/company/${symbol}`}
            onClick={() => getUrl(symbol)}
            replace
          >
            {name}
          </Link>
        </h4>
      </div>
      <small className="fst-italic text-white-50">{exchange}</small>
    </div>
  </li>
);

List.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  getUrl: PropTypes.func.isRequired,
};

export default List;

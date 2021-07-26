import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegFolderOpen, FaSpinner } from 'react-icons/fa';
import { filterListing, filterMarkets } from '../actions';
import { getFilteredList } from '../selectors';
import FlashMessage from '../components/FlashMessage';
import ExchangeFilter from '../components/ExchangeFilter';
import List from '../components/List';

const Directory = () => {
  const { isLoading, error } = useSelector((state) => state.notifications);
  const companies = useSelector((state) => getFilteredList(state));
  const dispatch = useDispatch();

  const handleMarkets = (filter) => dispatch(filterMarkets(filter));

  const handleSearch = (e) => dispatch(filterListing(e.target.value));

  const navigate = useNavigate();

  const getUrl = (symbol) => navigate(`/company/${symbol}`);

  return (
    <>
      <h2>
        <FaRegFolderOpen />
        <span className="ms-3">Listing directory</span>
      </h2>
      {
        error !== null && (
          <FlashMessage>
            Error...Try reloading the page.
          </FlashMessage>
        )
      }
      {isLoading && <p className="page-loading"><FaSpinner /></p>}
      <div>
        <ExchangeFilter filterExchange={handleMarkets} />
        <input
          type="search"
          className="form-control form-control-sm mb-3"
          placeholder="Search trading symbol e.g GE"
          onChange={handleSearch}
        />
        <ul className="p-0 listings">
          {
            companies?.map((company) => (
              <List
                key={company.symbol}
                symbol={company.symbol}
                name={company.name}
                exchange={company.exchange}
                getUrl={getUrl}
              />
            )) ?? <li>No companies listed in directory</li>
          }
        </ul>
      </div>
    </>
  );
};

export default Directory;

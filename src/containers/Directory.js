import { useDispatch, useSelector } from 'react-redux';
import { FaRegFolderOpen, FaSpinner } from 'react-icons/fa';
import { filterListing } from '../actions';
import { getFilteredList } from '../selectors';
import List from '../components/List';

const Directory = () => {
  const { isLoading, error } = useSelector((state) => state.notifications);
  const companies = useSelector((state) => getFilteredList(state));
  const dispatch = useDispatch();

  const handleSearch = (e) => dispatch(filterListing(e.target.value));

  return (
    <>
      <h2>
        <FaRegFolderOpen />
        <span className="ms-3">Listing directory</span>
      </h2>
      {
        error !== null && (
          <div className="alert alert-danger" role="alert">
            Error...Try reloading the page.
          </div>
        )
      }
      {isLoading && <p className="page-loading"><FaSpinner /></p>}
      <div>
        <input
          type="search"
          className="form-control form-control-sm mb-3"
          placeholder="e.g AMZN"
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
              />
            )) ?? <li>No companies in directory</li>
          }
        </ul>
      </div>
    </>
  );
};

export default Directory;

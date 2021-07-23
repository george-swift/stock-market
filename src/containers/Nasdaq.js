import '../assets/Sass/Listing.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { getFilteredNasdaq100 } from '../selectors';
import Company from '../components/NasdaqConstituent';
import { filterNasdaq } from '../actions';

const Nasdaq = () => {
  const companies = useSelector((state) => getFilteredNasdaq100(state));
  const { isLoading } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const handleSearch = (e) => dispatch(filterNasdaq(e.target.value));

  return (
    <div className="container-fluid px-0">
      <div className="overview">
        <h2>List of Nasdaq 100 Companies</h2>
        <input
          type="search"
          className="form-control form-control-sm mb-3"
          placeholder="e.gs Technology, MSFT"
          onChange={handleSearch}
        />
      </div>
      {isLoading && <p className="page-loading"><FaSpinner /></p>}
      <table className="table table-hover bg-light">
        <thead className="table-dark">
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Sector</th>
            <th scope="col">Headquarter</th>
            <th scope="col">Company Quote</th>
          </tr>
        </thead>
        <tbody>
          {
            companies?.map((company) => (
              <Company
                key={company.name}
                symbol={company.symbol}
                name={company.name}
                sector={company.sector}
                hq={company.headQuarter}
              />
            )) ?? (
              <tr>
                <th scope="row">n/a</th>
                <td colSpan="4">No companies in Nasdaq100</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Nasdaq;
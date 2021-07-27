import '../assets/Sass/Ticker.scss';
import { useSelector } from 'react-redux';
import { getListing } from '../selectors';

const Ticker = () => {
  const companies = useSelector((state) => getListing(state));

  return (
    <div className="overflow-hidden">
      <div className="wrap-ticker">
        <div className="ticker">
          {
            companies?.map((company) => (
              <p key={company.symbol} className="ticker__item">
                {`${company.symbol} : $${company.price}`}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Ticker;

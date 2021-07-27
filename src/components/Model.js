import PropTypes from 'prop-types';

const Model = ({ company }) => {
  const {
    symbol,
    companyName,
    ceo,
    website,
    ipoDate,
    industry,
    sector,
    fullTimeEmployees,
    price,
    changes,
    volAvg,
    mktCap,
    dcf,
    description,
  } = company;

  return (
    <>
      <p className="col-lg-3">
        <span className="fw-bold">CEO:</span>
        <br />
        {ceo}
      </p>
      <p className="col-lg-4">
        <span className="fw-bold">Website:</span>
        <br />
        <a href={website} target="_blank" rel="noreferrer">{website}</a>
      </p>
      <p className="col-lg-3">
        <span className="fw-bold">Company Name:</span>
        <br />
        {companyName}
      </p>
      <p className="col-lg-2">
        <span className="fw-bold">Symbol:</span>
        <br />
        {symbol}
      </p>

      <p className="col-lg-3">
        <span className="fw-bold">Sector:</span>
        <br />
        {sector}
      </p>
      <p className="col-lg-4">
        <span className="fw-bold">Industry:</span>
        <br />
        {industry}
      </p>
      <p className="col-lg-3">
        <span className="fw-bold">Fulltime Employees:</span>
        <br />
        {Number(fullTimeEmployees).toLocaleString()}
      </p>
      <p className="col-lg-2">
        <span className="fw-bold">IPO Date:</span>
        <br />
        {ipoDate}
      </p>

      <p className="col-lg-3">
        <span className="fw-bold">Market Cap:</span>
        <br />
        {`$${mktCap.toLocaleString()}`}
      </p>
      <p className="col-lg-2">
        <span className="fw-bold">Discounted Cash Flow:</span>
        <br />
        {`$${dcf}`}
      </p>
      <p className="col-lg-2 price">
        <span className="fw-bold"> Price:</span>
        <br />
        {`$${price}`}
      </p>
      <p className="col-lg-3">
        <span className="fw-bold">Volume Average:</span>
        <br />
        {volAvg.toLocaleString()}
      </p>
      <p className="col-lg-2">
        <span className="fw-bold">Changes:</span>
        <br />
        {changes}
      </p>

      <p className="col-lg-12">
        <span className="fw-bold">Description:</span>
        <br />
        {description}
      </p>
    </>
  );
};

Model.propTypes = {
  company: PropTypes.shape({
    symbol: PropTypes.string,
    companyName: PropTypes.string,
    ceo: PropTypes.string,
    website: PropTypes.string,
    ipoDate: PropTypes.string,
    industry: PropTypes.string,
    sector: PropTypes.string,
    fullTimeEmployees: PropTypes.string,
    price: PropTypes.number,
    changes: PropTypes.number,
    volAvg: PropTypes.number,
    mktCap: PropTypes.number,
    dcf: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Model;

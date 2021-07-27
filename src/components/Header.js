import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaHome, FaChartLine, FaInfoCircle, FaTrademark,
} from 'react-icons/fa';

const Header = ({ reset }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" onClick={() => reset()}>
        <span className="me-2">Stock Market</span>
        <FaTrademark />
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#fmNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="fmNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => reset()}>
              <FaHome />
              <span className="ms-2">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/listings" className="nav-link" onClick={() => reset()}>
              <FaChartLine />
              <span className="ms-2">Stock List</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => reset()}>
              <FaInfoCircle />
              <span className="ms-2">About</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = { reset: PropTypes.func.isRequired };

export default Header;

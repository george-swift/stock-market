import {
  FaCodeBranch, FaGithub, FaInfoCircle, FaLinkedin,
} from 'react-icons/fa';

const About = () => (
  <div className="container-fluid pt-4">
    <div className="row text-center about">
      <div className="col-12 mb-5">
        <h2>
          <FaInfoCircle />
          <span className="ms-3">About Page</span>
        </h2>
      </div>
      <div className="col-12">
        <p className="mb-3">
          The Stock Market app relies on data provided by
          {' '}
          <a href="https://financialmodelingprep.com/developer/docs/">Financial Modeling Prep</a>
          {' '}
          to display up-to-date news and stock prices covering, but not limited to,
          {' '}
          the
          {' '}
          <span className="fst-italic">NYSE</span>
          {' '}
          and
          {' '}
          <span className="fst-italic">NASDAQ.</span>
        </p>
      </div>
      <div className="mt-5">
        <p className="mb-4">
          <FaCodeBranch />
          <span className="ms-2 text-white-50">Sole Developer</span>
          <br />
          Ubong George
        </p>
        <p className="mb-4">
          <FaLinkedin />
          <span className="ms-2 text-white-50">LinkedIn</span>
          <br />
          <a href="https://www.linkedin.com/in/ubong-itok">Connect with Ubong George</a>
        </p>
        <p className="mb-4">
          <FaGithub />
          <span className="ms-2 text-white-50">GitHub</span>
          <br />
          <a href="https://github.com/george-swift">View other projects</a>
        </p>
      </div>
    </div>
  </div>
);

export default About;

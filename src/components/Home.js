import '../assets/Sass/Home.scss';
import { FaGlobe } from 'react-icons/fa';
import Stories from '../containers/Stories';
import Directory from '../containers/Directory';

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-7 stories">
        <h2 className="mb-4">
          <span className="me-3">Top Stories</span>
          <FaGlobe />
        </h2>
        <hr />
        <Stories />
      </div>
      <div className="col-lg-5 directory">
        <Directory />
      </div>
    </div>
  </div>
);

export default Home;

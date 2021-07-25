import '../assets/Sass/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchListingStarted, fetchNasdaqStarted } from '../actions';
import Header from './Header';
import Ticker from '../containers/Ticker';
import Home from './Home';
import Nasdaq from '../containers/Nasdaq';
import About from './About';
import Profile from '../containers/Profile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListingStarted());
    dispatch(fetchNasdaqStarted());
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Ticker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Nasdaq />} />
          <Route path="/company/:id" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

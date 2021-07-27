import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../setupTests';
import Nasdaq from '../../containers/Nasdaq';
import { FILTER, UI } from '../../constants';

const mockStore = configureStore();

describe('Snapshot of the Nasdaq component', () => {
  const store = mockStore({
    nasdaq: [
      {
        symbol: 'CHTR',
        name: 'Charter Communications Inc',
        sector: 'Communication Services',
        headQuarter: 'Stamford, CONNECTICUT',
      },
      {
        symbol: 'VRSN',
        name: 'Verisign Inc',
        sector: 'Technology',
        headQuarter: 'Reston, VIRGINIA',
      },
      {
        symbol: 'SPLK',
        name: 'Splunk Inc',
        sector: 'Technology',
        headQuarter: 'San Francisco, CALIFORNIA',
      },
    ],
    filter: { ...FILTER },
    notifications: { ...UI },
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Nasdaq />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Constituent').exists()).toBe(true);
  });
});

describe('Querying the Nasdaq component', () => {
  it('should render a spinning component while the page loads', () => {
    const store = mockStore({
      nasdaq: [],
      filter: { ...FILTER },
      notifications: {
        ...UI,
        isLoading: true,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Nasdaq />
        </Router>
      </Provider>,
    );

    expect(wrapper.find('FaSpinner').exists()).toBe(true);
    expect(wrapper.find('Constituent').exists()).toBe(false);
  });
});

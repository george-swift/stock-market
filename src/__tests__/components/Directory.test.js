import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../setupTests';
import { UI, FILTER } from '../../constants';
import Directory from '../../containers/Directory';

const mockStore = configureStore();

describe('Snapshot of the Directory component', () => {
  const store = mockStore({
    listings: [
      {
        symbol: 'MU',
        name: 'Micron Technology, Inc.',
        price: 75.53,
        exchange: 'Nasdaq Global Select',
      },
      {
        symbol: 'LOW',
        name: "Lowe's Companies, Inc.",
        price: 196.77,
        exchange: 'New York Stock Exchange',
      },
    ],
    filter: { ...FILTER },
    notifications: { ...UI },
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Directory />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('List').exists()).toBe(true);
  });
});

describe('Querying the Directory component', () => {
  it('should render a spinning component while the page loads', () => {
    const store = mockStore({
      listings: [],
      filter: { ...FILTER },
      notifications: {
        ...UI,
        isLoading: true,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Directory />
        </Router>
      </Provider>,
    );
    expect(wrapper.find('FlashMessage').exists()).toBe(false);
    expect(wrapper.find('FaSpinner').exists()).toBe(true);
    expect(wrapper.find('List').exists()).toBe(false);
  });

  it('should render an alert message if there is an error', () => {
    const store = mockStore({
      listings: [],
      filter: { ...FILTER },
      notifications: {
        ...UI,
        isLoading: false,
        error: 'Error loading directory',
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Directory />
        </Router>
      </Provider>,
    );

    expect(wrapper.find('FlashMessage').exists()).toBe(true);
    expect(wrapper.find('FaSpinner').exists()).toBe(false);
    expect(wrapper.find('List').exists()).toBe(false);
  });
});

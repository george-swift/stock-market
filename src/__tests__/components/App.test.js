import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../setupTests';
import { UI, FILTER } from '../../constants';
import { fetchListingStarted, fetchNasdaqStarted } from '../../actions';
import App from '../../components/App';

describe('Snapshot of the App component', () => {
  const mockStore = configureStore();

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
    ],
    filter: { ...FILTER },
    notifications: { ...UI },
  });

  it('should fetch the ETF listings and Nasdaq100 on mount', () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(store.getActions()[0]).toEqual(fetchListingStarted());
    expect(store.getActions()[1]).toEqual(fetchNasdaqStarted());
  });
});

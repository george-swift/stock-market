import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import '../../setupTests';
import Ticker from '../../containers/Ticker';

describe('Screenshot of the Ticker component', () => {
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
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Ticker />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

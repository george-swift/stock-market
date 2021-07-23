import * as selectors from '../selectors';
import { filterListing, filterNasdaq } from '../actions';
import filter from '../reducers/filter';

const mockState = {
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
    {
      symbol: 'SPLK',
      name: 'Splunk Inc',
      sector: 'Technology',
      headQuarter: 'San Francisco, CALIFORNIA',
    },
  ],
  filter: {
    listing: '',
    nasdaq: '',
  },
};

describe('Testing StockMarket selectors', () => {
  afterEach(() => {
    selectors.getListing.resetRecomputations();
    selectors.getFilteredList.resetRecomputations();
    selectors.getFilteredNasdaq100.resetRecomputations();
  });

  it('should purely return a sorted array of listings by price for the Ticker', () => {
    const newCompany = {
      symbol: 'XLK',
      name: 'Technology Select Sector SPDR Fund',
      price: 153,
      exchange: 'New York Stock Exchange Arca',
    };
    const readOnly = {
      ...mockState,
      listings: [...mockState.listings, newCompany],
    };
    const whatTickerReceives = [mockState.listings[1], newCompany, mockState.listings[0]];

    expect(selectors.getListing(readOnly)).toStrictEqual(
      expect.arrayContaining(whatTickerReceives),
    );
    expect(selectors.getListing(readOnly)).not.toStrictEqual(readOnly.listings);
  });

  it('should recompute state only with price changes else return memoized data for Ticker', () => {
    expect(selectors.getListing.recomputations()).toEqual(0);
    selectors.getListing(mockState);
    expect(selectors.getListing.recomputations()).toEqual(1);
    selectors.getListing(mockState);
    selectors.getListing(mockState);
    expect(selectors.getListing.recomputations()).toEqual(1);
  });

  it('should return a memoized filtered stocklist when users lookup the listing directory', () => {
    const search = 'lo';
    const action = filterListing(search);
    let updatedState = {
      ...mockState,
      filter: filter(mockState.filter, action),
    };

    expect(selectors.getFilteredList.recomputations()).toEqual(0);
    expect(selectors.getFilteredList(updatedState)).toStrictEqual(
      expect.arrayContaining([mockState.listings[1]]),
    );
    expect(selectors.getFilteredList.recomputations()).toEqual(1);
    selectors.getFilteredList(updatedState);
    selectors.getFilteredList(updatedState);
    expect(selectors.getFilteredList.recomputations()).toEqual(1);

    const newAction = filterListing('m');
    updatedState = {
      ...mockState,
      filter: filter(mockState.filter, newAction),
    };
    expect(selectors.getFilteredList(updatedState)).toStrictEqual(
      expect.arrayContaining([mockState.listings[0]]),
    );
    expect(selectors.getFilteredList.recomputations()).toEqual(2);
  });

  it('should return a memoized filtered list of companies when users lookup the Nasdaq100', () => {
    const search = 'v';
    const action = filterNasdaq(search);
    let updatedState = {
      ...mockState,
      filter: filter(mockState.filter, action),
    };

    expect(selectors.getFilteredNasdaq100.recomputations()).toEqual(0);
    expect(selectors.getFilteredNasdaq100(updatedState)).toStrictEqual(
      expect.arrayContaining([mockState.nasdaq[1]]),
    );
    expect(selectors.getFilteredNasdaq100.recomputations()).toEqual(1);
    selectors.getFilteredNasdaq100(updatedState);
    selectors.getFilteredNasdaq100(updatedState);
    expect(selectors.getFilteredNasdaq100.recomputations()).toEqual(1);

    const newAction = filterListing('Tech');
    updatedState = {
      ...mockState,
      filter: filter(mockState.filter, newAction),
    };
    expect(selectors.getFilteredNasdaq100(updatedState)).toStrictEqual(
      expect.arrayContaining([mockState.nasdaq[1], mockState.nasdaq[2]]),
    );
    expect(selectors.getFilteredNasdaq100.recomputations()).toEqual(2);
  });
});

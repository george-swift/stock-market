import {
  UI,
  FILTER, FILTER_MARKETS, FILTER_LISTING, FILTER_NASDAQ,
  FETCH_ETF_LIST_STARTED, FETCH_ETF_LIST_SUCCEEDED, FETCH_ETF_LIST_FAILED,
  FETCH_NASDAQ_STARTED, FETCH_NASDAQ_FAILED, FETCH_NASDAQ_SUCCEEDED,
} from '../constants';

import listings from '../reducers/listings';
import nasdaq from '../reducers/nasdaq';
import filter from '../reducers/filter';
import notifications from '../reducers/notifications';

describe('Testing the Listing reducer', () => {
  test('should be an empty array in default state', () => {
    expect(listings(undefined, {})).toStrictEqual(expect.arrayContaining([]));
  });

  test('should update state if API returns ETF Listing', () => {
    const payload = [{ symbol: 'SQ', name: 'Square' }];

    const action = {
      type: FETCH_ETF_LIST_SUCCEEDED,
      payload,
    };

    expect(listings(undefined, action)).toStrictEqual(expect.arrayContaining([...payload]));
  });
});

describe('Testing the Nasdaq reducer', () => {
  test('should be an empty array in default state', () => {
    expect(nasdaq(undefined, {})).toStrictEqual(expect.arrayContaining([]));
  });

  test('should update state if API returns Nasdaq constituents', () => {
    const payload = [{ name: 'Exelon Corp', sector: 'Utilities' }];

    const action = {
      type: FETCH_NASDAQ_SUCCEEDED,
      payload,
    };

    expect(nasdaq(undefined, action)).toStrictEqual(expect.arrayContaining([...payload]));
  });
});

describe('Testing the Filter reducer', () => {
  test('should be an object of empty strings in default state', () => {
    expect(filter(undefined, {})).toStrictEqual(expect.objectContaining({ ...FILTER }));
  });

  test('should update state as user selects an exchange from the directory', () => {
    const action = {
      type: FILTER_MARKETS,
      payload: 'Nasdaq Global Select',
    };

    expect(filter(undefined, action)).toStrictEqual(expect.objectContaining({
      ...FILTER,
      markets: 'Nasdaq Global Select',
    }));
  });

  test('should update state as user attempts a lookup in listing directory', () => {
    const action = {
      type: FILTER_LISTING,
      payload: 'sq',
    };

    expect(filter(undefined, action)).toStrictEqual(expect.objectContaining({
      ...FILTER,
      listing: 'sq',
    }));
  });

  test('should update state as user attempts a lookup in Nasdaq 100', () => {
    const action = {
      type: FILTER_NASDAQ,
      payload: 'Techn',
    };

    expect(filter(undefined, action)).toStrictEqual(expect.objectContaining({
      ...FILTER,
      nasdaq: 'Techn',
    }));
  });
});

describe('Testing the Notifications reducer', () => {
  test('should be a falsy loading status and null error by default', () => {
    expect(notifications(undefined, {})).toStrictEqual(expect.objectContaining({ ...UI }));
  });

  test('should be loading when a fetch task is started', () => {
    const action1 = { type: FETCH_NASDAQ_STARTED };
    const action2 = { type: FETCH_ETF_LIST_STARTED };

    expect(notifications(undefined, action1)).toStrictEqual(expect.objectContaining({
      isLoading: true,
      error: null,
    }));

    expect(notifications(undefined, action2)).toStrictEqual(expect.objectContaining({
      isLoading: true,
      error: null,
    }));
  });

  test('should not be loading but return an error message when a fetch task fails', () => {
    const action1 = {
      type: FETCH_NASDAQ_FAILED,
      payload: 'Unable to fetch nasdaq100',
    };

    const action2 = {
      type: FETCH_ETF_LIST_FAILED,
      payload: 'Something went wrong',
    };

    expect(notifications(undefined, action1)).toStrictEqual(expect.objectContaining({
      isLoading: false,
      error: action1.payload,
    }));

    expect(notifications(undefined, action2)).toStrictEqual(expect.objectContaining({
      isLoading: false,
      error: action2.payload,
    }));
  });
});

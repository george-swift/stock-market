import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import * as sagas from '../sagas';
import {
  FETCH_ETF_LIST_STARTED, FETCH_ETF_LIST_SUCCEEDED,
  FETCH_NASDAQ_STARTED, FETCH_NASDAQ_SUCCEEDED,
} from '../constants';

describe('Testing StockMarket sagas', () => {
  test('should handle the fetch ETF listing action if successful', () => {
    const mockFetch = {
      data: Array(105).fill({
        symbol: 'TEST',
      }),
    };

    const listing = mockFetch.data.slice(0, 101);

    const iterator = sagas.fetchETF({ type: FETCH_ETF_LIST_STARTED });

    expect(iterator.next().value).toEqual(call(api.fetchListing));

    expect(iterator.next(mockFetch).value).toStrictEqual(put({
      type: FETCH_ETF_LIST_SUCCEEDED,
      payload: listing,
    }));

    expect(iterator.next().done).not.toBe(false);
    expect(iterator.next().done).toBe(true);
  });

  test('should handle the fetch Nasdaq action if successful', () => {
    const mockFetch = {
      data: Array(100).fill({
        sector: 'Technology',
      }),
    };

    const iterator = sagas.fetchConstituents({ type: FETCH_NASDAQ_STARTED });

    expect(iterator.next().value).toEqual(call(api.fetchNasdaq));

    expect(iterator.next(mockFetch).value).toStrictEqual(put({
      type: FETCH_NASDAQ_SUCCEEDED,
      payload: mockFetch.data,
    }));

    expect(iterator.next().done).not.toBe(false);
    expect(iterator.next().done).toBe(true);
  });
});

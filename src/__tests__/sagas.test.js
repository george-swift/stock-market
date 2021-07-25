import { runSaga } from 'redux-saga';
import * as api from '../api';
import * as sagas from '../sagas';
import { fetchListingStarted, fetchNasdaqStarted } from '../actions';
import {
  FETCH_ETF_LIST_FAILED, FETCH_ETF_LIST_SUCCEEDED,
  FETCH_NASDAQ_FAILED, FETCH_NASDAQ_SUCCEEDED,
} from '../constants';

const recordSaga = async (saga, initialAction) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction,
  ).done;

  return dispatched;
};

const mockListing = {
  data: Array(105).fill({
    symbol: 'TEST',
  }),
};

const mockNasdaq100 = {
  data: Array(100).fill({
    sector: 'Technology',
  }),
};

describe('Testing StockMarket sagas', () => {
  api.fetchListing = jest.fn();
  api.fetchNasdaq = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should handle the fetch ETF listing action if successful', async () => {
    const { data } = mockListing;
    const listing = data.slice(0, 101);

    api.fetchListing.mockImplementation(() => Promise.resolve({ data }));

    const dispatched = await recordSaga(sagas.fetchETF, fetchListingStarted());

    expect(api.fetchListing).toHaveBeenCalledTimes(1);

    expect(dispatched).toContainEqual({
      type: FETCH_ETF_LIST_SUCCEEDED,
      payload: listing,
    });
  });

  test('should handle the fetch ETF listing action if unsuccesful', async () => {
    const error = 'Could not retrieve ETF Listing';

    api.fetchListing.mockImplementation(() => Promise.reject(new Error(error)));

    const secondDispatched = await recordSaga(sagas.fetchETF, fetchListingStarted());

    expect(api.fetchListing).toHaveBeenCalledTimes(1);

    expect(secondDispatched).toContainEqual({
      type: FETCH_ETF_LIST_FAILED,
      payload: { error },
    });
  });

  test('should handle the fetch Nasdaq action if successful', async () => {
    const { data } = mockNasdaq100;

    api.fetchNasdaq.mockImplementation(() => Promise.resolve({ data }));

    const dispatched = await recordSaga(sagas.fetchConstituents, fetchNasdaqStarted());

    expect(api.fetchNasdaq).toHaveBeenCalledTimes(1);

    expect(dispatched).toContainEqual({
      type: FETCH_NASDAQ_SUCCEEDED,
      payload: data,
    });
  });

  test('should handle the fetch Nasdaq action if unsuccessful', async () => {
    const error = 'Could not retrieve Nasdaq100';

    api.fetchNasdaq.mockImplementation(() => Promise.reject(new Error(error)));

    const dispatched = await recordSaga(sagas.fetchConstituents, fetchNasdaqStarted());

    expect(api.fetchNasdaq).toHaveBeenCalledTimes(1);

    expect(dispatched).toContainEqual({
      type: FETCH_NASDAQ_FAILED,
      payload: { error },
    });
  });
});

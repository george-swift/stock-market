import {
  FETCH_ETF_LIST_STARTED,
  FETCH_NASDAQ_STARTED,
  FILTER_MARKETS,
  FILTER_LISTING,
  FILTER_NASDAQ,
  RESET_FILTERS,
} from '../constants';

import * as actions from '../actions';

describe('Testing synchronous action creators', () => {
  it('should start the fetch ETF listing action', () => {
    expect(actions.fetchListingStarted()).toStrictEqual(expect.objectContaining({
      type: FETCH_ETF_LIST_STARTED,
    }));
  });

  it('should filter listings by exchange markets', () => {
    expect(actions.filterMarkets('Nasdaq Global Select')).toStrictEqual(expect.objectContaining({
      type: FILTER_MARKETS,
      payload: 'Nasdaq Global Select',
    }));
  });

  it('should provide a search term for the filter listing action', () => {
    expect(actions.filterListing('SQ')).toStrictEqual(expect.objectContaining({
      type: FILTER_LISTING,
      payload: 'SQ',
    }));
  });

  it('should start the fetch Nasdaq action', () => {
    expect(actions.fetchNasdaqStarted()).toStrictEqual(expect.objectContaining({
      type: FETCH_NASDAQ_STARTED,
    }));
  });

  it('should provide a search term for the filter nasdaq action', () => {
    expect(actions.filterNasdaq('Utilities')).toStrictEqual(expect.objectContaining({
      type: FILTER_NASDAQ,
      payload: 'Utilities',
    }));
  });

  it('should create the reset filter action', () => {
    expect(actions.resetFilters()).toStrictEqual(
      expect.objectContaining({ type: RESET_FILTERS }),
    );
  });
});

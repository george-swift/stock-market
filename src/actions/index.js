import {
  FETCH_ETF_LIST_STARTED,
  FETCH_NASDAQ_STARTED,
  FILTER_LISTING,
  FILTER_MARKETS,
  FILTER_NASDAQ,
} from '../constants';

export const fetchListingStarted = () => ({
  type: FETCH_ETF_LIST_STARTED,
});

export const fetchNasdaqStarted = () => ({
  type: FETCH_NASDAQ_STARTED,
});

export const filterMarkets = (exchange) => ({
  type: FILTER_MARKETS,
  payload: exchange,
});

export const filterListing = (searchTerm) => ({
  type: FILTER_LISTING,
  payload: searchTerm,
});

export const filterNasdaq = (searchTerm) => ({
  type: FILTER_NASDAQ,
  payload: searchTerm,
});

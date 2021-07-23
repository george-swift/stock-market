export const API_BASE_URL = 'https://financialmodelingprep.com/api/v3/';

export const FETCH_ETF_LIST_STARTED = 'FETCH_ETF_LIST_STARTED';

export const FETCH_ETF_LIST_FAILED = 'FETCH_ETF_LIST_FAILED';

export const FETCH_ETF_LIST_SUCCEEDED = 'FETCH_ETF_LIST_SUCCEEDED';

export const FILTER_LISTING = 'FILTER_LISTING';

export const FILTER_NASDAQ = 'FILTER_NASDAQ';

export const FETCH_NASDAQ_STARTED = 'FETCH_NASDAQ_STARTED';

export const FETCH_NASDAQ_FAILED = 'FETCH_NASDAQ_FAILED';

export const FETCH_NASDAQ_SUCCEEDED = 'FETCH_NASDAQ_SUCCEEDED';

export const UI = { isLoading: false, error: null };

export const FILTER = { listing: '', nasdaq: '' };

export const sortByValue = (data) => data.sort((item1, item2) => item2.price - item1.price);

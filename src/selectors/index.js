import { createSelector } from 'reselect';
import { sortByValue } from '../constants';

export const getListing = createSelector(
  [(state) => state.listings],
  (directory) => sortByValue([].concat(directory)),
);

const getMarkets = (state) => state.filter.markets;

const getExchange = createSelector(
  [(state) => state.listings, getMarkets],
  (directory, exchange) => {
    if (exchange === 'All Markets') return directory;
    return directory.filter((company) => company.exchange === exchange);
  },
);

const getListingFilter = (state) => state.filter.listing;

export const getFilteredList = createSelector(
  [getExchange, getListingFilter],
  (directory, searchTerm) => {
    const companies = directory
      .filter((company) => company.symbol.match(new RegExp(searchTerm, 'i'))
       || company.name.match(new RegExp(searchTerm, 'i')));
    return companies.length > 1 ? companies : null;
  },
);

const getNasdaqFilter = (state) => state.filter.nasdaq;

export const getFilteredNasdaq100 = createSelector(
  [(state) => state.nasdaq, getNasdaqFilter],
  (constituents, searchTerm) => {
    const companies = constituents.filter((company) => company.symbol.match(new RegExp(searchTerm, 'i'))
     || company.sector.match(new RegExp(searchTerm, 'i')));
    return companies.length > 1 ? companies : null;
  },
);

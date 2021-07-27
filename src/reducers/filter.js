import {
  FILTER, FILTER_MARKETS, FILTER_LISTING, FILTER_NASDAQ,
} from '../constants';

export default function filter(state = FILTER, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_MARKETS:
      return {
        ...state,
        markets: payload,
      };

    case FILTER_LISTING:
      return {
        ...state,
        listing: payload,
      };

    case FILTER_NASDAQ:
      return {
        ...state,
        nasdaq: payload,
      };

    default:
      return state;
  }
}

import { FILTER, FILTER_LISTING, FILTER_NASDAQ } from '../constants';

export default function filter(state = FILTER, action) {
  const { type, payload } = action;

  switch (type) {
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

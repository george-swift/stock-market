import { FETCH_NASDAQ_SUCCEEDED } from '../constants';

export default function nasdaq(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_NASDAQ_SUCCEEDED:
      return [...state, ...payload];

    default:
      return state;
  }
}

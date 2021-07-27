import { FETCH_ETF_LIST_SUCCEEDED } from '../constants';

export default function listings(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ETF_LIST_SUCCEEDED:
      return [...state, ...payload];

    default:
      return state;
  }
}

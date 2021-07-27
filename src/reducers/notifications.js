import {
  UI,
  FETCH_ETF_LIST_STARTED, FETCH_ETF_LIST_SUCCEEDED, FETCH_ETF_LIST_FAILED,
  FETCH_NASDAQ_STARTED, FETCH_NASDAQ_FAILED, FETCH_NASDAQ_SUCCEEDED,
} from '../constants';

export default function notifications(state = UI, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ETF_LIST_STARTED:
    case FETCH_NASDAQ_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_ETF_LIST_FAILED:
    case FETCH_NASDAQ_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case FETCH_ETF_LIST_SUCCEEDED:
    case FETCH_NASDAQ_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
}

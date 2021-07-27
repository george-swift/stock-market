import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import {
  FETCH_ETF_LIST_STARTED, FETCH_ETF_LIST_FAILED, FETCH_ETF_LIST_SUCCEEDED,
  FETCH_NASDAQ_STARTED, FETCH_NASDAQ_FAILED, FETCH_NASDAQ_SUCCEEDED,
} from '../constants';

export function* fetchETF() {
  try {
    const data = yield call(api.fetchListing);
    const listing = data.data.slice(0, 101);

    yield put({
      type: FETCH_ETF_LIST_SUCCEEDED,
      payload: listing,
    });
  } catch (e) {
    yield put({
      type: FETCH_ETF_LIST_FAILED,
      payload: { error: e.message },
    });
  }
}

export function* fetchConstituents() {
  try {
    const data = yield call(api.fetchNasdaq);
    yield put({
      type: FETCH_NASDAQ_SUCCEEDED,
      payload: data.data,
    });
  } catch (e) {
    yield put({
      type: FETCH_NASDAQ_FAILED,
      payload: { error: e.message },
    });
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ETF_LIST_STARTED, fetchETF);
  yield takeLatest(FETCH_NASDAQ_STARTED, fetchConstituents);
}

import { combineReducers } from 'redux';
import filter from './filter';
import listings from './listings';
import nasdaq from './nasdaq';
import notifications from './notifications';

const rootReducer = combineReducers({
  listings, nasdaq, filter, notifications,
});

export default rootReducer;

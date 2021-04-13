import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import mapReducer from './mapReducer';
import fieldReducer from './fieldReducer'
import dateReducer from './dateReducer';
import requestReducer from './requestReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  map: mapReducer,
  field: fieldReducer,
  date: dateReducer,
  requests: requestReducer,
});

export default rootReducer;

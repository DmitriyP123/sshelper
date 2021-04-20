import { combineReducers } from 'redux';

import usersReducer from './ducks/user/usersReducer';
import mapReducer from './reducers/mapReducer';
import fieldReducer from './reducers/fieldReducer'
import dateReducer from './reducers/dateReducer';
import requestReducer from './reducers/requestReducer'
import eventsReducer from './reducers/eventsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  map: mapReducer,
  field: fieldReducer,
  date: dateReducer,
  events: eventsReducer,
  requests: requestReducer,
});

export default rootReducer;

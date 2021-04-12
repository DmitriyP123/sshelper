import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import mapReducer from './mapReducer';
import fieldReducer from './fieldReducer'


const rootReducer = combineReducers({
  users: usersReducer,
  map: mapReducer,
  field: fieldReducer
});

export default rootReducer;

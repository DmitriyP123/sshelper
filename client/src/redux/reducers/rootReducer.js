import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import mapReducer from './mapReducer';


const rootReducer = combineReducers({
  users: usersReducer,
  map: mapReducer
});

export default rootReducer;

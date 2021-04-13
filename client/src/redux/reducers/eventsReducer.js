import { INIT_EVENTS, GET_EVENTS } from '../actionTypes/actionTypes';

const initialState = {
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_EVENTS:
      return { ...state, events: action.payload }

    case GET_EVENTS:
      return { ...state, events: state.events.filter(el => el.date === action.payload).sort }

    default:
      return { ...state };
  }
};

export default reducer;

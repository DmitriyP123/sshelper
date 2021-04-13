import { SET_DATE } from '../actionTypes/actionTypes';

const initialState = {
  date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
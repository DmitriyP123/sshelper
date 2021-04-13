import { INIT_FIELDS, GET_FIELD } from '../actionTypes/actionTypes';

const initialState = {
  fields: [],
  currentField: { title: '', content: '', pictures: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FIELDS:
      return { ...state, fields: action.payload }

    case GET_FIELD:
      return { ...state, currentField: state.fields.find(el => el._id === action.payload) }

    default:
      return { ...state }
  }
}

export default reducer

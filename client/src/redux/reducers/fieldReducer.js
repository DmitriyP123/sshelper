import { INIT_FIELDS } from '../actionTypes/actionTypes';

const initialState = {
    fields: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_FIELDS:
            return {...state, fields: action.payload}
            
        default:
            return {...state}
    }
}

export default reducer

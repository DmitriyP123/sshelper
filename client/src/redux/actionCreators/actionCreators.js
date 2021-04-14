import { REGISTER_USER, USER_CHECK, EDIT_USER, LOGIN_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, INIT_MARKERS, ADD_MARKER, INIT_FIELDS, GET_FIELD, SET_DATE, INIT_REQUESTS, ADD_REQUEST, DELETE_REQUEST, GET_FIELD_EVENTS, GET_DAY_EVENTS, GET_AVAIL_TIMES, ADD_EVENT } from '../actionTypes/actionTypes'


export const registerUserAC = (payload) => {
  return {
    type: REGISTER_USER,
    payload
  }
}

export const loginUserAC = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  }
}

export const editUserAC = (payload) => {
  return {
    type: EDIT_USER,
    payload
  }
}

export const ErrorLoginUserAC = (payload) => {
  return {
    type: ERROR_LOGIN,
    payload
  }
}

export const ErrorRegisterUserAC = (payload) => {
  return {
    type: ERROR_REGISTER,
    payload
  }
}

export const checkUserAC = (payload) => {
  return {
    type: USER_CHECK,
    payload
  }
}

export const logoutUserAC = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const initMarkersAC = (payload) => {
  return {
    type: INIT_MARKERS,
    payload
  }
}

export const addMarkerAC = (payload) => {
  return {
    type: ADD_MARKER,
    payload
  }
}


export const initFieldsAC = (payload) => {
  return {
    type: INIT_FIELDS,
    payload
  }
};

export const getFieldAC = (payload) => {
  return {
    type: GET_FIELD,
    payload
  }
};

export const setDateAC = (payload) => {
  return {
    type: SET_DATE,
    payload
  }
};

export const initRequestAC = (payload) => {
  return {
    type: INIT_REQUESTS,
    payload
  }
};

export const addRequestAC = (payload) => {
  return {
    type: ADD_REQUEST,
    payload
  }
};

export const deleteRequestAC = (payload) => {
  return {
    type: DELETE_REQUEST,
    payload
  }
};

export const getFieldEventsAC = (payload) => {
  return {
    type: GET_FIELD_EVENTS,
    payload
  }
};

export const getDayEventsAC = (payload) => {
  return {
    type: GET_DAY_EVENTS,
    payload
  }
};

export const getDayAvailTimesAC = () => {
  return {
    type: GET_AVAIL_TIMES,
  }
};

export const addEventAC = (payload) => {
  return {
    type: ADD_EVENT,
    payload
  }
};

import { REGISTER_USER, USER_CHECK, LOGIN_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, GLOBAL_ERROR, INIT_MARKERS, ADD_MARKER, INIT_FIELDS, GET_FIELD, SET_DATE } from '../actionTypes/actionTypes'

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

export const ErrorLoginUserAC = () => {
  return {
    type: ERROR_LOGIN,
  }
}

export const ErrorRegisterUserAC = () => {
  return {
    type: ERROR_REGISTER,
  }
}

export const globalErrorAC = () => {
  return {
    type: GLOBAL_ERROR,
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

export const initEventsAC = (payload) => {
  return {
    type: SET_DATE,
    payload
  }
};

export const setDateAC = (payload) => {
  return {
    type: SET_DATE,
    payload
  }
};

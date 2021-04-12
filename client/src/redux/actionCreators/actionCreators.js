import { REGISTER_USER, USER_CHECK, LOGIN_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, GLOBAL_ERROR, INIT_MARKERS, ADD_MARKER, INIT_FIELDS, INIT_REQUESTS, ADD_REQUEST, DELETE_REQUEST } from '../actionTypes/actionTypes'

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
}

export const initRequestAC = (payload) => {
  return {
    type:INIT_REQUESTS,
    payload
  }
}

export const addRequestAC = (payload) => {
  return {
    type:ADD_REQUEST,
    payload
  }
}

export const deleteRequestAC = (payload) => {
  return {
    type:DELETE_REQUEST,
    payload
  }
}

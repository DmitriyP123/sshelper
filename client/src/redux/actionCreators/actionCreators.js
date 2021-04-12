import { REGISTER_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, INIT_MARKERS, ADD_MARKER } from '../actionTypes/actionTypes'

export const registerUserAC = (payload) => {
  return {
    type: REGISTER_USER,
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

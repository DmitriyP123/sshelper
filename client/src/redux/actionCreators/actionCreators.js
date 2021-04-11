import { REGISTER_USER, USER_CHECK, LOGIN_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, GLOBAL_ERROR} from '../actionTypes/actionTypes'

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

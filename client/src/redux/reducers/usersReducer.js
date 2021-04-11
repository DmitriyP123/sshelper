import { REGISTER_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN, LOGIN_USER, GLOBAL_ERROR } from '../actionTypes/actionTypes'
const state = JSON.parse(window.localStorage.getItem("currentState"));

let initialState = {
  nickname: '',
  email: '',
  id:'',
  token:'',
  logged: false,
  error:false,
  globalError:false,
}

if (state) {
  initialState = {
    nickname:state.users.nickname,
    email:state.users.email,
    token:state.users.token,
    id:state.users.id,
    logged:state.users.logged,
    error:false,
    globalError:false,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER: 
    return {...state, nickname:action.payload.data.nickname, email:action.payload.data.email, id:action.payload.data._id, token:action.payload.token, error: false, logged:true, globalError:true} 

    case LOGIN_USER: 
    return {...state, nickname:action.payload.nickname, email:action.payload.email, id:action.payload._id, token:action.payload.token, error: false, logged:true, globalError:false} 

    case LOGOUT_USER: 
    return {...state, nickname: "",email: "",logged: false,error: false, globalError:false}
    
    case ERROR_REGISTER: 
    return {...state, error: true, globalError:false} 

    case ERROR_LOGIN: 
    return {...state, error: true, globalError:false} 

    case GLOBAL_ERROR: 
    return {...state, nickname: "",email: "", logged: false, error: false, globalError: true} 

    default: 
    return state
  }
}

export default reducer

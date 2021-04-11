import { REGISTER_USER, LOGOUT_USER, ERROR_REGISTER, ERROR_LOGIN } from '../actionTypes/actionTypes'
const state = JSON.parse(window.localStorage.getItem("currentState"));

let initialState = {
  nickname: '',
  email: '',
  id:'',
  token:'',
  logged: false,
  error:'',
}

if (state) {
  initialState = {
    nickname:state.nickname,
    email:state.email,
    token:state.token,
    id:'',
    logged:state.logged,
    error:'',
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER: 
    return {...state, nickname:action.payload.data.nickname, email:action.payload.data.email, id:action.payload.data._id, token:action.payload.token, logged:true} 

    case LOGOUT_USER: 
    return {...state, nickname: "",email: "",logged: false,}
    
    case ERROR_REGISTER: 
    return {...state, error: action.payload} 

    case ERROR_LOGIN: 
    return {...state, error: action.payload} 

    default: 
    return state
  }
}

export default reducer

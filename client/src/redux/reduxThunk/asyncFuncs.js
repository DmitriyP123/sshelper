import { registerUserAC, logoutUserAC, ErrorLoginUserAC, ErrorRegisterUserAC} from '../actionCreators/actionCreators'


export const fetchRegisterUser = (nickname,email,password) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/users/registration", {
        method:'POST',
        headers: {
          'Content-type' : 'Application/json'
        },
        body: JSON.stringify({
          nickname,
          email,
          password
        })
      });
      let userInfo = await response.json();
      let {data, token} = userInfo
      if (userInfo.status === 'success') {
        dispatch(registerUserAC({data, token}))
        dispatch(ErrorRegisterUserAC(userInfo.message))   
      }
    } catch (err) {
     console.log(err); 
    }
  }
}

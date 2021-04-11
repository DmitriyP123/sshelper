import {
  registerUserAC,
  loginUserAC,
  logoutUserAC,
  globalErrorAC,
  ErrorLoginUserAC,
  ErrorRegisterUserAC,
  checkUserAC,
} from "../actionCreators/actionCreators";

export const fetchRegisterUser = (nickname, email, password) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/users/registration", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          nickname,
          email,
          password,
        }),
      });
      let userInfo = await response.json();
      let { data, token } = userInfo;
      if (userInfo.status === "success") {
        dispatch(registerUserAC({ data, token }));
      } else {
        dispatch(ErrorRegisterUserAC());
      }
    } catch (err) {
      dispatch(globalErrorAC());
    }
  };
};

export const fetchLoginUser = (email, password) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let userInfo = await response.json();
      let { data } = userInfo;
      if (userInfo.status === "success") {
        dispatch(loginUserAC(data));
      } else {
        dispatch(ErrorLoginUserAC());
      }
    } catch (err) {
      dispatch(globalErrorAC());
    }
  };
};

export const fetchCheckUser = (token) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/users/verify", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      let userInfo = await response.json();
      console.log(userInfo);
    } catch (err) {
      dispatch(globalErrorAC());
    }
  };
};

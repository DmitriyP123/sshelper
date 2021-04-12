import {
  registerUserAC,
  loginUserAC,
  logoutUserAC,
  globalErrorAC,
  ErrorLoginUserAC,
  ErrorRegisterUserAC,
  checkUserAC,
  initMarkersAC,
  initFieldsAC,
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
      let { data, token } = userInfo;
      if (userInfo.status === "success") {
        dispatch(registerUserAC({ data, token }));
      } else {
        dispatch(ErrorRegisterUserAC(userInfo.message));
      }
    } catch (err) {
      dispatch(globalErrorAC());
    }
  };
};

export const fetchInitMarkers = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("/marks", {
        method: "GET",
        headers: {
          "Content-type": "Application/json",
        },
      });
      let result = await response.json();
      let { data } = result;

      if (data.status === "success") {
        dispatch(initMarkersAC(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchInitFields = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("/fields", {
        method: "GET",
        headers: {
          "Content-type": "Application/json",
        },
      });
      let  result = await response.json();
      let { data } = result;
      if (result.status === "success") {
        dispatch(initFieldsAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}
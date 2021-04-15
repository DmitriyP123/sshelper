import {
  registerUserAC,
  loginUserAC,
  logoutUserAC,
  ErrorLoginUserAC,
  ErrorRegisterUserAC,
  initUsersAC,
  checkUserAC,
  initMarkersAC,
  initFieldsAC,
  initRequestAC,
  addRequestAC,
  deleteRequestAC,
  getFieldEventsAC,
  editUserAC,
  addEventAC,
  joinEventAC,
  leaveEventAC
} from "../actionCreators/actionCreators";

export const fetchInitUsers = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("/users");
      let usersInfo = await response.json();
      let { data } = usersInfo;
      if (usersInfo.status === "success") {
        dispatch(initUsersAC(data));
      }
    } catch (err) {
      dispatch(ErrorRegisterUserAC('Error'));
    }
  }
}

export const fetchRegisterUser = (nickname, email, password) => {
  return async (dispatch) => {
    try {
      if (nickname && email && password) {
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
          dispatch(ErrorRegisterUserAC('Пользователь с таким именем/почтой уже существует'));
        }
      } else {
        dispatch(ErrorRegisterUserAC('Пожалуйста, заполните все поля'))
      }
    } catch (err) {
      dispatch(ErrorRegisterUserAC('Изивините, в данный момент наш сервис недоступен'));
    }
  };
};

export const fetchLoginUser = (email, password) => {
  return async (dispatch) => {
    try {
      if (email && password) {
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
          dispatch(ErrorLoginUserAC('Неверно введены email или пароль'));
        }
      } else {
        dispatch(ErrorLoginUserAC('Пожалуйста, заполните все поля'))
      }
    } catch (err) {
      dispatch(ErrorLoginUserAC('Изивините, в данный момент наш сервис недоступен'));
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
        dispatch(ErrorRegisterUserAC('Error'));
      }
    } catch (err) {
      dispatch(ErrorRegisterUserAC('Error'));
    }
  };
};

export const fetchEditUser = (id, about, expirience) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          about,
          expirience
        }),
      });
      let userInfo = await response.json();
      let { data, token } = userInfo;
      dispatch(editUserAC({ data, token }));
    } catch (err) {
      dispatch(ErrorRegisterUserAC('Error'));
    }
  };
};

export const fetchInitMarkers = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("/marks");
      let result = await response.json();
      let { data } = result;
      if (result.status === "success") {
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
      let response = await fetch("/fields");
      let result = await response.json();
      let { data } = result
      if (result.status === "success") {
        dispatch(initFieldsAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchInitRequests = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("/requests");
      let result = await response.json();
      let { data } = result
      if (result.status === "success") {
        dispatch(initRequestAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchAddRequests = ({ lat, lng, fieldTitle,fieldAddress, fieldContent }) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/requests", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          lat,
          lng,
          fieldTitle,
          fieldContent,
          fieldAddress
        }),
      });
      let result = await response.json();
      let { data } = result;
      if (result.status === "success") {
        dispatch(addRequestAC(data));
        alert('Ваша заявка успешно отправлена')
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchDeleteRequests = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/requests", {
        method: "DELETE",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ id }),
      });
      let result = await response.json();
      let { data } = result
      if (result.status === "success") {
        dispatch(deleteRequestAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchAcceptRequests = (id, title, content,address, lat, lng, info) => {
  return async (dispatch) => {
    try {
      let response = await fetch('/field', {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ 
          title,
          content,
          address
        }),
      });
      let result = await response.json();
      let { data } = result
      if (result.status === "success") {
        let response = await fetch('/marks', {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify({ 
            lat,
            lng,
            info,
            field:data._id,
          }),
        });
        let result = await response.json();
        if (result.status === "success") {
          let response = await fetch("/requests", {
            method: "DELETE",
            headers: {
              "Content-type": "Application/json",
            },
            body: JSON.stringify({ id }),
          });
          let result = await response.json();
          let { data } = result
          if (result.status === "success") {
            dispatch(deleteRequestAC(data));
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}


export const fetchGetFieldEvents = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/field/${payload}/events`);
      const result = await response.json();
      const { data } = result;
      dispatch(getFieldEventsAC(data));
    } catch (err) {
      console.log(err)
    }
  }
};

export const fetchAddEvent = ({ name, description, time, date, fieldId }) => {
  return async (dispatch) => {
    try {
      let response = await fetch("/events", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          title: name,
          content: description,
          start: time,
          date,
          fieldId
        }),
      });
      let result = await response.json();
      let { data } = result;
      console.log(data)
      if (result.status === "success") {
        dispatch(addEventAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchJoinEvent = (eventId, UserId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`/events/${eventId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          id:UserId,
        }),
      });
      let result = await response.json();
      let { data } = result;
      if (result.status === "success") {
        dispatch(joinEventAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchLeaveEvent = (eventId, UserId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          id:UserId,
        }),
      });
      let result = await response.json();
      let { data } = result;
      if (result.status === "success") {
        dispatch(leaveEventAC(data));
      }
    } catch (err) {
      console.log(err)
    }
  }
}

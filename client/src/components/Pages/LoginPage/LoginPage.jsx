import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchLoginUser } from "../../../redux/reduxThunk/asyncFuncs";

function LoginPage() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { error } = useSelector(state => state)
  const LoginHandler = () => {};
  return (
    <>
      <div className="container">
        <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
          Доброе пожаловать! Пожалуйста, зарегистрируйтесь...
        </h3>
        <form onSubmit={LoginHandler} method="POST" action="/users">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Введите вашу красивую почту
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="например: clown@clown.ru"
              name="email"
              ref={emailInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Введите пароль...
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="не используйте: 123, qqq и т.п !"
              name="password"
              ref={passwordInput}
            />
          </div>
          {error && <div>
            <span style={{ color: "red", marginBottom: "25px" }}>
              Вы неверно ввели почту или пароль...
            </span>
          </div>}
          <button type="submit" className="btn btn-warning">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;

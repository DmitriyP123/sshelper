import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterUser } from '../../../redux/reduxThunk/asyncFuncs'

function RegisterPage() {
  const dispatch = useDispatch()
  const nicknameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()
  const history = useHistory()
  const { error, globalError } = useSelector(state => state.users)
  const RegistrationHandler = async (e) => {
    e.preventDefault()
    const nickname = nicknameInput.current.value
    const email = emailInput.current.value
    const password = passwordInput.current.value
    dispatch(fetchRegisterUser(nickname,email,password))
    if (error && !globalError) {
      console.log(error);
      history.push('/map')
    }
  };

  return (
    <>
    <div className="container">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
        Доброе пожаловать! Пожалуйста, зарегистрируйтесь...
      </h3>
      <form onSubmit={RegistrationHandler} method="POST" action="/users">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Придумайте крутой ник
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="например: clown"
            ref={nicknameInput}
            name="name"
          />
        </div>
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
            Придумайте крутой пароль
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
              Пользователь с таким именем/почтой уже существует!!!
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

export default RegisterPage;

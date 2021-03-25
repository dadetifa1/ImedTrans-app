import React, { useState } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/article-api-service';
import { Button, Input } from '../Utils/Utils';
import './Loginform.css';

function LoginForm(props) {
  const [error, setError] = useState();

  const handleLoginSuccessLocal = () => {
    props.onsuccessfulLogin();
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  const handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccessLocal();
      })
      .catch((res) => {
        setError(res.error);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="LoginForm" onSubmit={(e) => handleSubmitJwtAuth(e)}>
        <div className="error">{error && <p className="error">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" type="text" id="LoginForm__user_name"></Input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input required name="password" type="password" id="LoginForm__password"></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;

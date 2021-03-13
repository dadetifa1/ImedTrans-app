import React, { useState } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/article-api-service';
import { Button, Input } from '../Utils/Utils';

function LoginForm(props) {
  // static defaultProps = {
  //   onLoginSuccess: () => {},
  // };
  const [error, setError] = useState();
  // state = { error: null };

  const handleLoginSuccessLocal = () => {
    props.onsuccessfulLogin();
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  const handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    // this.setState({ error: null });
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
    <form className="LoginForm" onSubmit={(e) => handleSubmitJwtAuth(e)}>
      <div className="alert">{error && <p className="error">{error}</p>}</div>
      <div className="user_name">
        <label htmlFor="LoginForm__user_name">User name</label>
        <Input required name="user_name" id="LoginForm__user_name"></Input>
      </div>
      <div className="password">
        <label htmlFor="LoginForm__password">Password</label>
        <Input required name="password" type="password" id="LoginForm__password"></Input>
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;

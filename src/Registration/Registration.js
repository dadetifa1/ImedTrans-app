import React, { useState } from 'react';
import './Registration.css';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

function Registration(props) {
  const [userEmail, setUserEmail] = useState({ value: '', touched: false });
  const [userName, setUserName] = useState({ value: '', touched: false });
  const [userPassword, setUserPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_SERVER_URL}/api/imedtransport/user`, {
      method: 'POST',
      body: JSON.stringify({
        useremail: userEmail.value,
        user_name: userName.value,
        userpassword: userPassword,
      }),
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${API_SERVER_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        props.history.push('/');
      })
      .catch((error) => {
        setErrorMessage(JSON.parse(error.message).error);
      });
  };

  return (
    <main className="main">
      <div className="reg">
        <h1>Sign up</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {errorMessage && <h3 className="error"> {errorMessage} </h3>}
          <div className="item">
            <div>
              <label htmlFor="emailAddress">
                Email Address<span>*</span>
              </label>
              <input
                id="emailAddress"
                type="email"
                name="emailAddress"
                onChange={(e) => {
                  const newEmail = { value: e.target.value, touched: true };
                  setUserEmail(newEmail);
                }}
                required
              />
            </div>
          </div>
          <div className="item">
            <div>
              <label htmlFor="username">
                User name<span>*</span>
              </label>
              <input
                id="username"
                type="text"
                name="username"
                onChange={(e) => {
                  const newUsername = { value: e.target.value, touched: true };
                  setUserName(newUsername);
                }}
                required
              />
            </div>
          </div>
          <div className="item">
            <div>
              <label htmlFor="userPassword">
                Password<span>*</span>
              </label>
              <input
                id="userPassword"
                type="password"
                name="Password"
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="btn-block">
            <button type="submit" href="/">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Registration;

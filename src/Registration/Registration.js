import React, { useState } from 'react';
import './Registration.css';
import ValidationError from '../ValidationError';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

function Registration(props) {
  const [userEmail, setUserEmail] = useState({ value: '', touched: false });
  const [userName, setUserName] = useState({ value: '', touched: false });
  const [userPassword, setUserPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // const validateDollarAmount = () => {
  //   let re = /\S+@\S+\.\S+/;

  //   if (!re.test(userEmail.value)) {
  //     return 'na bitch';
  //   }
  // };

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

  // const emailformError = validateDollarAmount();

  return (
    <main className="main">
      <form onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && <h3 className="error"> {errorMessage} </h3>}
        <div className="banner">
          <h3>Sign up</h3>
        </div>
        <div className="item">
          <div>
            <label htmlFor="emailAddress">
              Email Address<span>*</span>
            </label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              // onChange={(e) => setUserEmail(e.target.value)}
              // onChange={(e) => setUserEmail({ ...userEmail, touched: true })}
              onChange={(e) => {
                const newEmail = { value: e.target.value, touched: true };
                setUserEmail(newEmail); // Now it works
              }}
              required
            />
            {/* {userEmail.touched && <ValidationError message={emailformError} />} */}
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
    </main>
  );
}

export default Registration;

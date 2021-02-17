import React from 'react';
import './Registration.css';

function Registration(props) {
  return (
    <main class="main">
      <form action="/">
        <div class="banner">
          <h3>Sign up</h3>
        </div>
        <div class="item">
          <div>
            <label for="emailAddress">
              Email Address<span>*</span>
            </label>
            <input id="emailAddress" type="email" name="emailAddress" />
          </div>
        </div>
        <div class="item">
          <div>
            <label for="userPassword">
              Password<span>*</span>
            </label>
            <input id="userPassword" type="password" name="Password" required />
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default Registration;

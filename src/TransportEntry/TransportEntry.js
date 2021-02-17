import React from 'react';
import './TransportEntry.css';
import ValidationError from '../ValidationError';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

function TransportEntry(props) {
  return (
    <main class="main">
      <form action="/">
        <div className="banner">
          <h3>Transport request</h3>
        </div>
        <div className="item">
          <div className="name-item">
            <input id="fname" type="text" name="fname" placeholder="Pickup street Address" required />
            <input id="lname" type="text" name="lname" placeholder="Destination street Address" required />
            <input id="fname" type="text" name="fname" placeholder="Pickup City" required />
            <input id="lname" type="text" name="lname" placeholder="Destination City" required />
            <input id="fname" type="text" name="fname" placeholder="Pickup State" required />
            <input id="lname" type="text" name="lname" placeholder="Destination state" required />
            <input id="fname" type="text" name="fname" placeholder="Pickup zip code" required />
            <input id="lname" type="text" name="lname" placeholder="Destination zip code" required />
          </div>
        </div>
        <div className="item">
          <div>
            <label for="emailAddress">
              Date and time<span>*</span>
            </label>
            <input id="emailAddress" type="datetime-local" name="emailAddress" />
          </div>
        </div>
        <div className="Trans-result"></div>
        <div className="btn-block">
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
export default TransportEntry;

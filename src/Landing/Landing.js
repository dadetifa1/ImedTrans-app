import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <main className="app-container">
        <header>
          <h1>IMedTrans</h1>
          <p>
            The app will allow a user to book a non-emergency transportation to everyday destinations. The app will
            provide details of the trip to the user and the transportation company.
          </p>
          <Link to={'/registration'}>Register</Link>
        </header>
      </main>
    );
  }
}

export default Landing;

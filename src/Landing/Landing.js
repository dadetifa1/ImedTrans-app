import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>IMedTrans</h1>
          <h4>
            The app will allow a user to book a non-emergency transportation to everyday destinations. The app will
            provide details of the trip to the user and the transportation company.
          </h4>
          <Link to={'/collection'}>Register</Link>
        </header>
      </main>
    );
  }
}

export default Landing;

import './TransReport.css';
import React, { useState, useEffect } from 'react';
import TokenService from '../services/token-service';
const { API_SERVER_URL } = require('../config');

function TransReport(props) {
  const [transportData, setTransportData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    loadOnce();
  }, []);

  const loadOnce = () => {
    fetch(`${API_SERVER_URL}/api/imedtransport/user/transportlog/`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setTransportData(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const renderTableData = () => {
    return transportData.map((posting) => {
      let pickup = JSON.parse(posting.starting_location);
      let dropOff = JSON.parse(posting.destination_location);

      let za = new Date(posting.date_of_transport),
        zaR = za.getUTCFullYear(),
        zaMth = za.getMonth() + 1,
        zaDs = za.getUTCDate(),
        zaTm = `${za.getUTCHours()}: ${za.getUTCMinutes()}`;

      let requestedDateTime = `${zaR}-${zaMth}-${zaDs} at ${zaTm}`;

      return (
        <tr>
          <td>{posting.user_name}</td>
          <td>{pickup.pickUpFullAddress}</td>
          <td>{dropOff.desFullAddress}</td>
          <td>{posting.mileage}</td>
          <td>{requestedDateTime}</td>
        </tr>
      );
    });
  };

  return (
    <main className="main">
      <div className="alert">{errorMessage && <p className="error">{errorMessage}</p>}</div>
      <section>
        <table className="blueTable">
          <thead>
            <tr>
              <th>Client</th>
              <th>Pick up</th>
              <th>Drop off</th>
              <th>Mileage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan="4">
                <div className="links">
                  <a href="#">&laquo;</a>{' '}
                  <a className="active" href="#">
                    1
                  </a>{' '}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>{transportData && renderTableData()}</tbody>
        </table>
      </section>
    </main>
  );
}

export default TransReport;

import './TransReport.css';
import React, { useState, useEffect } from 'react';
import TokenService from '../services/token-service';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

function TransReport(props) {
  const [transportData, setTransportData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    loadOnce();
  }, []);

  // useEffect(() => {
  //   console.log(transportData);
  //   console.log(errorMessage);
  // });

  const loadOnce = () => {
    fetch(`${API_SERVER_URL}/api/imedtransport/user/transportlog/`, {
      headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${API_SERVER_TOKEN}`,
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
        // console.log(transportData);
        // console.log(errorMessage);
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
          <tbody>
            {transportData && renderTableData()}
            {/* <tr>
              <td>Client 1</td>
              <td>Pickup Address 1</td>
              <td>Drop off Address 1</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 2</td>
              <td>Pickup Address 2</td>
              <td>Drop off Address 2</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 3</td>
              <td>Pickup Address 3</td>
              <td>Drop off Address 3</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 4</td>
              <td>Pickup Address 4</td>
              <td>Drop off Address 4</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 5</td>
              <td>Pickup Address 5</td>
              <td>Drop off Address 5</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 6</td>
              <td>Pickup Address 6</td>
              <td>Drop off Address 6</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Client 7</td>
              <td>Pickup Address 7</td>
              <td>Drop off Address 7</td>
              <td>11</td>
            </tr> */}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default TransReport;

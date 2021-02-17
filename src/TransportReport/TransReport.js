import React from 'react';
import { Link } from 'react-router-dom';
import './TransReport.css';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

function TransReport(props) {
  return (
    <main class="main">
      <section>
        <table class="blueTable">
          <thead>
            <tr>
              <th>Client</th>
              <th>Pick up</th>
              <th>Drop off</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colspan="4">
                <div class="links">
                  <a href="#">&laquo;</a>{' '}
                  <a class="active" href="#">
                    1
                  </a>{' '}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default TransReport;

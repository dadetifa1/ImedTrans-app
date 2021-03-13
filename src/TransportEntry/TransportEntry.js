import React, { useState } from 'react';
import './TransportEntry.css';
import Geocode from 'react-geocode';
import TokenService from '../services/token-service';
import { GoogleMap, LoadScript, DistanceMatrixService, Marker } from '@react-google-maps/api';
const { API_SERVER_URL, GEOCODE_API_TOKEN } = require('../config');

function TransportEntry(props) {
  const [pickUpStreet, setPickUpStreet] = useState();
  const [pickUpCity, setPickUpCity] = useState();
  const [pickUpState, setPickUpState] = useState();
  const [pickUpZip, setPickUpZip] = useState();
  const [desStreet, setDesStreet] = useState();
  const [desCity, setDesCity] = useState();
  const [desState, setDesState] = useState();
  const [desZip, setDesZip] = useState();
  const [requestDate, setRequestDate] = useState();
  const [desData, setDesData] = useState();
  const [pickupData, setPickupData] = useState();
  const [showResult, setShowResult] = useState(false);
  const [mileageData, setMileageData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_SERVER_URL}/api/imedtransport/user/transportreq`, {
      method: 'POST',
      body: JSON.stringify({
        starting_location: pickupData,
        destination_location: desData,
        date_of_transport: requestDate,
        mileage: mileageData,
      }),
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
        props.history.push('/transportReport');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGetRequestData = (e) => {
    e.preventDefault();

    const pickUpFullAddress = `${pickUpStreet},${pickUpCity},${pickUpState},${pickUpZip}`;
    const desFullAddress = `${desStreet},${desCity},${desState},${desZip}`;

    Promise.all([Geocode.fromAddress(pickUpFullAddress), Geocode.fromAddress(desFullAddress)])
      .then(([startLocation, destinationLocation]) => {
        if (!startLocation.status === 'OK') return Promise.reject(`Location not found ${startLocation}`);
        if (!destinationLocation.status === 'OK') return Promise.reject(`Location not found ${destinationLocation}`);

        return Promise.all([
          startLocation.results[0].geometry.location,
          destinationLocation.results[0].geometry.location,
        ]);
      })
      .then(([startLocation, destinationLocation]) => {
        setPickupData({ pickUpFullAddress, ...startLocation });
        setDesData({ desFullAddress, ...destinationLocation });
        setShowResult(true);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <main className="main">
      <div className="alert">{errorMessage && <p className="error">{errorMessage}</p>}</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="banner">
          <h3>Transport request</h3>
        </div>
        <div className="item">
          <div className="name-item">
            <div>
              <fieldset>
                <legend> Pickup street Address </legend>
                <label htmlFor="pickupstr">Street Address</label>
                <input
                  id="pickupstr"
                  type="text"
                  name="pickupstr"
                  onChange={(e) => setPickUpStreet(e.target.value)}
                  required
                />
                <label htmlFor="pickupcity">City</label>
                <input
                  id="pickupcity"
                  type="text"
                  name="pickupcity"
                  onChange={(e) => setPickUpCity(e.target.value)}
                  required
                />
                <label htmlFor="pickupstate">State</label>
                <input
                  id="pickupstate"
                  type="text"
                  name="pickupstate"
                  onChange={(e) => setPickUpState(e.target.value)}
                  required
                />
                <label htmlFor="pickupzip">Zip code</label>
                <input
                  id="pickupzip"
                  type="text"
                  name="pickupzip"
                  onChange={(e) => setPickUpZip(e.target.value)}
                  required
                />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend> Destination Address </legend>
                <label htmlFor="desstr">Street Address</label>
                <input id="desstr" type="text" name="desstr" onChange={(e) => setDesStreet(e.target.value)} required />
                <label htmlFor="descity">City</label>
                <input id="descity" type="text" name="descity" onChange={(e) => setDesCity(e.target.value)} required />
                <label htmlFor="desstate">State</label>
                <input
                  id="desstate"
                  type="text"
                  name="desstate"
                  onChange={(e) => setDesState(e.target.value)}
                  required
                />
                <label htmlFor="deszip">Zip code</label>
                <input id="deszip" type="text" name="deszip" onChange={(e) => setDesZip(e.target.value)} required />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="item">
          <div>
            <label htmlFor="requestdate">
              Date and time<span>*</span>
            </label>
            <input
              id="requestdate"
              type="datetime-local"
              name="requestdate"
              onChange={(e) => {
                setRequestDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="Trans-result">
          {showResult && (
            <LoadScript googleMapsApiKey={GEOCODE_API_TOKEN}>
              <GoogleMap
                mapContainerStyle={{
                  height: '300px',
                  width: '600px',
                }}
                zoom={10}
                center={{ lat: pickupData.lat, lng: pickupData.lng }}
              >
                <Marker position={{ lat: pickupData.lat, lng: pickupData.lng }} label="Pick up" />
                <Marker position={{ lat: desData.lat, lng: desData.lng }} label="Drop off" />

                <DistanceMatrixService
                  options={{
                    destinations: [{ lat: desData.lat, lng: desData.lng }],
                    origins: [{ lng: pickupData.lng, lat: pickupData.lat }],
                    travelMode: 'DRIVING',
                  }}
                  callback={(response) => {
                    let km = response.rows[0].elements[0].distance.value / 1000;
                    let miles = (km / 1.6).toFixed(1);
                    setMileageData(miles);
                  }}
                />
              </GoogleMap>
            </LoadScript>
          )}
        </div>
        <div className="btn-block">
          {!showResult ? (
            <button
              onClick={(e) => {
                handleGetRequestData(e);
              }}
            >
              Get Data
            </button>
          ) : (
            <button type="submit" href="/">
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
export default TransportEntry;

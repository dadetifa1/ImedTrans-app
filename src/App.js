import React, { useState } from 'react';
import Landing from './Landing/Landing';
import TransportReport from './TransportReport/TransReport';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './footer/Footer';
import TransportEntry from './TransportEntry/TransportEntry';
import Registration from './Registration/Registration';
import Loginform from './LoginForm/Loginform';
import PrivateRoute from './Utils/PrivateRoute';
import './App.css';

function App() {
  const [reFreshNav, setRefreshNav] = useState(false);

  const handleLoginSuccess = () => {
    setRefreshNav(!reFreshNav);
  };

  return (
    <main className="App">
      <Nav refreshafterlogin={reFreshNav} />

      <Route exact path="/" component={Landing} />

      <PrivateRoute
        exact
        path="/transportReport"
        component={TransportReport}
        onsuccessfulLogin={() => {
          handleLoginSuccess();
        }}
      />

      <PrivateRoute
        exact
        path="/transportEntry"
        component={TransportEntry}
        onsuccessfulLogin={() => {
          handleLoginSuccess();
        }}
      />

      <Route exact path="/registration" component={Registration} />

      <Route
        path="/login"
        render={(props) => (
          <Loginform
            {...props}
            onsuccessfulLogin={() => {
              handleLoginSuccess();
            }}
          />
        )}
      />
      <Footer />
    </main>
  );
}

export default App;

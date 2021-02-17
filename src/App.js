import React from 'react';
import Landing from './Landing/Landing';
import TransportReport from './TransportReport/TransReport';
// import Header from './Header/Header'
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './footer/Footer';
import TransportEntry from './TransportEntry/TransportEntry';
import SaleEntryUpdate from './SalesEntryUpdate/SaleEntryUpdate';
import Registration from './Registration/Registration';
import './App.css';

function App() {
  return (
    <main className="App">
      <Nav />

      <Route exact path="/" component={Landing} />

      <Route exact path="/transportReport" component={TransportReport} />

      <Route exact path="/transportEntry" component={TransportEntry} />

      <Route exact path="/registration" component={Registration} />

      <Route
        exact
        path="/salesentry/update/:id"
        render={({ match, history }) => <SaleEntryUpdate id={match.params.id} history={history} />}
      />

      <Footer />
    </main>
  );
}

export default App;

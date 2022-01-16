import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Customers from './Components/Customer/index.jsx';
import Home from "./Components/Dashboard/dashboard.jsx";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/Customer" element={<Customers />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

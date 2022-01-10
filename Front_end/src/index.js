import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';

import User_Routes from './Router/User_Routes';

import reportWebVitals from './reportWebVitals';

import Header from './Components/Header/Header.jsx';

import Footer from './Components/Footer/Footer.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <User_Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

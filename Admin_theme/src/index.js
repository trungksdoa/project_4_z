import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Router_web from './Router_web';
import reportWebVitals from './reportWebVitals';


import Asidebar from './Components/Sidebar/sidebar.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Asidebar />
      <Router_web />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

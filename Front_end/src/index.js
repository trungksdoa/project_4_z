import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';
import User_Routes from './Router/User_Routes';
import reportWebVitals from './reportWebVitals';

import Admin_Routes from './Router/Admin_Routes'


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}

    {/*************************************
				Header Start
		**************************************/}

    {/*************************************
				Header End
		**************************************/}
    <User_Routes />

    <Admin_Routes />

    {/*************************************
				Footer Start
		**************************************/}



    {/*************************************
				Footer End
		**************************************/}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

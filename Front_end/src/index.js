import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Router_web from './Router_web';
import reportWebVitals from './reportWebVitals';


import Header from './Components/Header/Header.jsx';

import Footer from './Components/Footer/Footer.jsx';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}

    {/*************************************
				Header Start
		**************************************/}

    <Header></Header>

    {/*************************************
				Header End
		**************************************/}
    <Router_web />

    {/*************************************
				Footer Start
		**************************************/}

    {<Footer></Footer>}
    
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

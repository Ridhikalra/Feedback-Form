import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Navbar from './Navbar';

ReactDOM.render(
  <>
    <Navbar />
    
    <App/>
  </>
  ,
  document.getElementById('root')
);


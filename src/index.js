import React from 'react';
import ReactDOM from 'react-dom/client';
//bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//code wasn't working with React.StrictMode so deleted
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App, {}, null));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
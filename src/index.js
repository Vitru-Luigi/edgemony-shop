import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {worker} from './mocks/browser';

worker.start();

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();

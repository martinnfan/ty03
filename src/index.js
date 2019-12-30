import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router';
import { render } from 'react-dom';
import routes from './routes'

import App from './App';
import HeaderNavBar from './shared/header';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HeaderNavBar />, document.getElementById('root'));
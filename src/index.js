import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

import Routes from './web/routes';

import './web/style/index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);


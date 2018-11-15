import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_APT_URL;

ReactDOM.render(<App />, document.getElementById('root'));

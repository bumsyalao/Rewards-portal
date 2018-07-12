import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'css/style.scss';
const BASE_NAME = process.env.NODE_ENV === "production" ? "/Rewards-portal" : "/";
ReactDOM.render(
    <BrowserRouter basename={BASE_NAME}>
        <App />
    </BrowserRouter>, document.getElementById('app')
);


import React from 'react';
import ReactDOM from 'react-dom';
//additional imports from npm packages to include redux and routing
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
            <App/>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
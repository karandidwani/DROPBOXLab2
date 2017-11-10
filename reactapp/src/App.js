import React, {Component} from 'react';
import './App.css';

import LayoutPage from './components/pages/LayoutPage';


class App extends Component {
    render() {
        return (
            <div className="container">
                <LayoutPage/>
            </div>

        );
    }
}

export default (App);

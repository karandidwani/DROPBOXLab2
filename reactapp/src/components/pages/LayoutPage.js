import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom'

import '../../App.css';
import dropboxheaderImg from '../../dropbox.svg';
import dropboxIcon from '../../dropbox_icon.svg';
import dropboxLoginPageImg from '../../dropboxLoginPageImg.png';

import LoginPage from './LoginPage'
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import * as API from '../../api/API'

class LayoutPage extends Component {

    state = {
        login: "",
        message: "",
        error: ""
    }

    handleLogin = userdata => {
        console.log("in handle login");
        API.doLogin(userdata)
            .then((res) => {
                console.log("API.dologin res is "+res.status);
                if (res.status === 201) {
                    console.log("login succesful, redirect to home page");
                    localStorage.setItem("email", res.email)
                    this.props.history.push("/dashboard");
                } else if (res.status === 401) {
                    console.log("login failed ");
                    this.props.history.push("/");
                    this.setState({
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            })};

    handleSignup = userdata =>
        API.doSignup(userdata)
            .then((res) => {
                if (res.status === 201) {
                    console.log("login successful")
                    this.props.history.push("/");
                } else if (res.status === 401) {
                    this.setState({
                        message: "Signup Failed"
                    });
                }
            });

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <header className="header clearfix" align="center">
                            <img src={dropboxIcon} alt="dropboxIcon" height="50"/>
                            <img src={dropboxheaderImg}
                                 alt="dropboxheaderImg"
                                 height="50"/>
                        </header>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-6'>
                                <img src={dropboxLoginPageImg} alt="dropboxLoginPageImg"/>
                            </div>
                            <div className='col-md-6'>
                                <LoginPage login={this.handleLogin}/>
                            </div>
                        </div>
                    </div>
                )}/>
                <Route exact path="/signup" render={() => (
                    <div>
                        <header className="header clearfix" align="center">
                            <img src={dropboxIcon} alt="dropboxIcon" height="50"/>
                            <img src={dropboxheaderImg}
                                 alt="dropboxheaderImg"
                                 height="50"/>
                        </header>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-6'>
                                <img src={dropboxLoginPageImg} alt="dropboxLoginPageImg"/>
                            </div>
                            <div className='col-md-6'>
                                <SignupPage signup={this.handleSignup}/>
                            </div>
                        </div>
                    </div>
                )}/>
                <Route exact path="/dashboard" render={() => (
                    <div>
                        <header className="header clearfix" align="center">
                            <img src={dropboxIcon} alt="dropboxIcon" height="50"/>
                            <img src={dropboxheaderImg}
                                 alt="dropboxheaderImg"
                                 height="50"/>
                        </header>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-12'>
                               <DashboardPage />
                            </div>
                        </div>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(LayoutPage);




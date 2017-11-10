import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <div className='jumbotron-fluid'>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h3 className="h4">Sign in</h3>
                    </div>
                    <div className="col-md-6">
                        <p>or <Link to="/signup">Create an Account</Link></p>
                        <br/>
                    </div>
                </div>
                <form className="form-group"  onSubmit = {() =>this.props.login(this.state)}>
                    <input className="form-control"
                           type="email"
                           id="email"
                           name="email"
                           placeholder="email"
                           required
                           autoFocus
                           onChange={(event) => {
                               this.setState({
                                   username: event.target.value
                               })}}
                    /><br/>
                    <input className="form-control"
                           type="password"
                           id="passowrd"
                           name="passowrd"
                           placeholder="password"
                           required
                           onChange={(event) => {
                                this.setState({
                                    password: event.target.value
                                })}}
                    />
                    <br/>
                    <div className="row">
                        <div className="col-md-2" style={{padding: "0"}}>
                            <input className="form-control"
                                   type="checkbox"
                                   name="rememberMe"
                                   align="left"/>
                        </div>
                        <div className="col-md-4" style={{fontSize: "small", padding: "0"}}>
                            Remember me
                        </div>
                        <div className="col-md-6" align="right">
                            <input type ="submit" className="btn btn-primary"  value="Sign in" />
                        </div>
                    </div>
                    <Link to="#" style={{fontSize: "small", padding: "0"}}>Forgot your Password?</Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;
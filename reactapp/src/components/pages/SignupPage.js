import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignupPage extends Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    }

    render() {
        return (
            <div className='jumbotron-fluid'>
                <div className="row justify-content-md-center">
                    <div className="col-md-8" align="left">
                        <h3 className="h4">Create an account</h3>
                    </div>
                    <div className="col-md-4">
                         <div align="right"><p>or <Link to="/">log in</Link></p></div>
                        <br/>
                    </div>
                </div>
                <form className="form-group">
                    <input className="form-control"
                             type="text"
                             placeholder="First name"
                             required
                             autoFocus
                             onChange={(event) => {
                               this.setState({
                                   firstname: event.target.value
                             })}}
                    /><br/>
                    <input className="form-control"
                           type="text"
                           placeholder="Last name"
                           required
                           onChange={(event) => {
                               this.setState({
                                   lastname: event.target.value
                               })}}
                    /><br/>
                    <input className="form-control"
                           type="email"
                           placeholder="Email"
                           required
                           onChange={(event) => {
                               this.setState({
                                   username: event.target.value
                               })}}
                    /><br/>
                    <input className="form-control"
                           type="password"
                           placeholder="Password"
                           required
                           onChange={(event) => {
                               this.setState({
                                   password: event.target.value
                               })}}
                    /><br/>
                    <div className="row">
                        <div className="col-md-2" style={{padding:"0"}}>
                            <input className="form-control"
                            type="checkbox"
                            name = "termsAndConditions"
                            required
                            align ="left"/>
                        </div>
                        <div className="col-md-4" style={{fontSize:"small",padding:"0"}}>
                            I agree to <Link to = "#">Dropbox terms</Link>
                        </div>
                        <div className="col-md-6" align="right">
                            <button className ="btn btn-primary" onClick={() =>this.props.signup(this.state)}>Create an Account</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(SignupPage);
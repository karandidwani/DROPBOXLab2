import React, {Component} from 'react';

class DashboardPage extends Component {

    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <div className='jumbotron-fluid'>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h3 className="h4">DropBox</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPage;
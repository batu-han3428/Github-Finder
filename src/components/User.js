import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class User extends Component {
    render() {
        const {login,avatar_url} = this.props.user;
        const divStyle = {
            height:"80%"
        };
        return (
            <div className="col">
               <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-4 text-center">
                            <img src={avatar_url} className="img-fluid rounded-start" alt={avatar_url}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={divStyle}>
                                <h5 className="card-title text-center">{login}</h5>    
                                <div className="d-flex" style={divStyle}>
                                    <Link to={`/user/${login}`} className="align-self-end btn btn-outline-primary btn-sm w-100">Go Profile</Link>    
                                </div>                                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User

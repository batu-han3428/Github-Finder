import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import ClearSearch from './ClearSearch'
import Alert from './Alert'
import {Route, Link, NavLink} from 'react-router-dom';//npm install react-router-dom


class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><i className={this.props.icon}></i> {this.props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className={this.props.icon}></i> {this.props.title}</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                </ul>                              
                                <Route exact path="/" render={props=>(
                                    <>
                                        <Alert />
                                        <Search />
                                        <ClearSearch />      
                                    </>
                                )}/>   
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

Navbar.defaultProps = {
    title:'Github',
    icon:'bi bi-github'
}//eğer istediğimiz props tanımlanmamışsa propslara varsayılan değer atayabiliyoruz

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}//propsların tipini ve zorunlu olup olmadığını belirtebiliriz. kriterlerimize uymazsa console dan hata döner. npm den indiriliyordu galiba

export default Navbar

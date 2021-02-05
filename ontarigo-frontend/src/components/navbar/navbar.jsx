import React, { Component } from 'react';
import { NavItems } from './navbar-items'
import './navbar.css'

export default class Navbar extends Component {
    state = { clicked: false }
    iconClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">OntariGo
                    <i className="fab fa-react"></i>
                </h1>
                <div className="menu-icon" onClick={this.iconClicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.className} href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}
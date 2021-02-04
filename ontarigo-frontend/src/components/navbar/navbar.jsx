import React, { Component } from 'react';
import { NavItems } from './navbar-items'
import './navbar.css'

export default class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">
                    
                </div>
                <ul>
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
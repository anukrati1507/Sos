import React from 'react';
import '../css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar-container">
                <div id="nav-one">
                    <Link className="nav-link" smooth to="/">Home</Link>
                </div>
                <div id="nav-two">
                    <Link className="nav-link" smooth to="/">Voice-over-SOS</Link>
                </div>
                <div id="nav-three">
                    <Link className="nav-link" smooth to='/selfdefence'>Self Defense</Link>
                </div>
                <div id="nav-four">
                    <Link className="nav-link" smooth to='/#contact'>Contact Us</Link>
                </div>
                <div id="nav-five">
                    <Link className="nav-link" smooth to="/#about">About</Link>
                </div>

            </div>);
    }
}

export default Navbar;
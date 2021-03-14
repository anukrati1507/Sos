import React from 'react';
import '../css/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar-container">
                <div id="nav-one">
                    <a className="nav-link" href='/'>Home</a>
                </div>
                <div id="nav-two">
                    <a className="nav-link" href='/'>Voice-over-SOS</a>
                </div>
                <div id="nav-three">
                    <a className="nav-link" href='/'>Self Defense</a>
                </div>
                <div id="nav-four">
                    <a className="nav-link" href='/'>Contact Us</a>
                </div>
                <div id="nav-five">
                    <a className="nav-link" href='/'>About</a>
                </div>

            </div>);
    }
}

export default Navbar;
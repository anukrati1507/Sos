import React from "react";
import '../css/selfd.css';
import selfd from '../assets/selfd2.jpg';

class SelfD extends React.Component {
    render() {
        return (
            <div id="self-container">
                <div>
                    <img src={selfd} alt="self defense image" id="selfd-image"></img>
                </div>
                <div>
                    <a href="" id="selfd-button">Self Defense</a>
                </div>
            </div>);
    }
}
export default SelfD;
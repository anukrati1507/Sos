import React from 'react';
import home from '../assets/home3.jpg';
import '../css/home.css';
import voice from '../assets/voice1.jpg';

class Home extends React.Component {
    render() {
        return (
            <div id="home-container">
                <div id="home-container-one">
                    <div id="home-image-text">
                        <h2>What is Voice-over-SOS?</h2>

                        <p>
                            Safety is one of the major concerns now-a-days. This product empowers women to protect themselves against different types of safety threats in public and private spaces.
                        </p>
                        <p>
                            The major flaw with the major SOS applications present in the market currently is that all of them are based on activation using the press of a button, which in cases of distress can be a lot to ask from the affected person.
                            With this application, we wish to solve this problem using a Voice activated SOS application that activates with a custom Voice Line.
                            This website also provide women with self defence techniques and ways to fight away any person with malicious intent.
                        </p>
                    </div>
                    <div>
                        <img src={home} alt="home" id="home-top-image" />
                    </div>
                </div>
                <div id="home-container-two">
                    <div>
                        <img src={voice} alt="voice over sos" id="home-image-two"></img>
                    </div>
                    <div id="home-text-two">
                        <h2>What is Voice-over-SOS?</h2>

                        <p>
                            Safety is one of the major concerns now-a-days. This product empowers women to protect themselves against different types of safety threats in public and private spaces.
                        </p>
                        <p>
                            The major flaw with the major SOS applications present in the market currently is that all of them are based on activation using the press of a button, which in cases of distress can be a lot to ask from the affected person.
                            With this application, we wish to solve this problem using a Voice activated SOS application that activates with a custom Voice Line.
                            This website also provide women with self defence techniques and ways to fight away any person with malicious intent.
                        </p>
                    </div>

                </div>
            </div>);
    }
}

export default Home;
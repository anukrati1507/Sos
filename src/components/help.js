import React from "react";
import "../css/help.css";
import ReactPlayer from "react-player";
import help from "../assets/help3.webp";
// import help3 from "../assets/help4.jpg";


function Help() {
    return (
        <div className="Help123">
            <div className="Help">
                <div className="sec1">
                    <img src={help} id="AboveImg" />
                </div>
                <div className="sec2">
                    <h1>
                        Women Helpline ( All India ) - Women In Distress 1091
                Women Helpline Domestic Abuse 181<br></br>
                Police 100<br></br>
                National Commison For Women (NCW) 011-26942369, 26944754
                </h1>
                </div>
            </div>
            <div className="Self-defence">
                <h1><center><b>Self - Defence is the Key</b></center></h1>


                <div className="tips">
                    <div className="tips1">
                        <h1>Tips and Tricks for Self-defence</h1>
                        <b> The below-mentioned are the tips and tricks of self-defence :</b>
                        <ul>
                            <li>
                                The women should stay fit enough to run fast
                       </li>
                            <li>
                                The women should check when walking on the empty road to avoid grouping and chain-snatching from behind.
                       </li>
                            <li>
                                It is recommended to keep your purse front and walk on the roads by paying full attention around the road.
                       </li>
                            <li>
                                The woman should avoid high-heeled footwear when they are walking a long distance in unknown places.
                       </li>
                            <li>
                                Say out “STOP” in a loud and aggressive voice, when they need help from other people.
                       </li>
                        </ul>
                    </div>
                    <div className="tips2">
                        <ReactPlayer url="https://youtu.be/9m-x64bKfR4" />
                        <ReactPlayer url="https://youtu.be/FGEuDMNw0dA" />
                    </div>
                </div>
            </div>

        </div>



    )
}
export default Help;
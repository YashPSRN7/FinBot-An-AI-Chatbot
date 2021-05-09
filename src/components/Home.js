import React from "react";
import VideoBg from "reactjs-videobg";
import Video from "../media/video.mp4";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Robot from "../media/robot.png";
import Invest from "../media/invest.svg";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                {/* <div className="robot">
                    <img src={Robot} alt="potato internet lmao"></img>
                </div> */}
                <div className="bg-video">
                    <VideoBg>
                        <VideoBg.Source
                            src={Video}
                            type="video/mp4"
                            loop="true"
                        />
                    </VideoBg>
                </div>

                <div className="content">
                    <div className="center-content">
                        <Typewriter
                            options={{
                                strings: ["FinBot"],
                                autoStart: true,
                                loop: true,
                                pauseFor: 99999999,
                                cursor: "",
                            }}
                        />
                    </div>
                    <div className="center-content-desc">
                        <Typewriter
                            options={{
                                strings: [
                                    "",
                                    "An AI ChatBot",
                                    "For all your financial knowledge.",
                                ],
                                autoStart: true,
                                loop: true,
                                pauseFor: 3000,
                                delay: 45,
                                cursor: "",
                                deleteSpeed: 10,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;

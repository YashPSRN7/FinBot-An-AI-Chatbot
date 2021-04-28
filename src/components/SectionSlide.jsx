import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./SectionSlide.css";

class SectionSlide extends React.Component {
    render() {
        return (
            <div className="sectionwipes">
                <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
                    <Scene pin>
                        <div className="panel blue">
                            <span>Panel</span>
                        </div>
                    </Scene>
                    <Scene pin>
                        <div className="panel turqoise">
                            <span>Panel</span>
                        </div>
                    </Scene>
                    <Scene pin>
                        <div className="panel green">
                            <span>Panel</span>
                        </div>
                    </Scene>
                    <Scene pin>
                        <div className="panel bordeaux">
                            <span>Panel</span>
                        </div>
                    </Scene>
                </Controller>
            </div>
        );
    }
}

export default SectionSlide;

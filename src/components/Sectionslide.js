import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import './Sectionslide.css'
import './sectionslide2'

const Sectionslide = () => (
  <div>
    <Controller>
      <Scene duration={600} pin>
        <div>
            <div id="pinContainer">
                <div id="slideContainer">
                    <section class="panel blue">
                        <b>ONE</b>
                    </section>
                    <section class="panel turqoise">
                        <b>TWO</b>
                    </section>
                    <section class="panel green">
                        <b>THREE</b>
                    </section>
                    <section class="panel bordeaux">
                        <b>FOUR</b>
                    </section>
                </div>
            </div>
        </div>
      </Scene>
    </Controller>
  </div>
);

export default Sectionslide;
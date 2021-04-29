import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./SectionSlide.css";
import Logo from "../media/finlogo.png";
import Jumbotron from 'react-bootstrap/Jumbotron'



const SectionSlide = () => (
    <div className="sectionwipes">
        <Controller>
            <Scene triggerHook="onLeave" duration="300%" pin>
                <Timeline wrapper={<div id="pinContainer" />}>
                    <section className="panel blue">
                        
                           <img
                                className="Logo2"
                                src={Logo}
                                alt="potato internet, kya kare hum"
                            />
                            <h1 className="">Our Developers</h1>
                        
                    </section>
                    <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
                        <section className="panel turqoise">
                            
                                <div className="container bootstrap snippets bootdey">
                                        <div className="profile card2">
                                        <div className="profile-body">
                                            <div className="profile-bio">
                                            <div className="row">
                                                <div className="col-md-5 text-center">
                                                <img className="img-thumbnail md-margin-bottom-10" src="https://i.pinimg.com/736x/91/7d/6f/917d6fe868189926002ca0db7e80ccd4.jpg" alt="" />
                                                </div>
                                                <div className="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <h3>Contirbution</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
                                                <p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>
                                                     
                                                </div>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            
                        </section>
                    </Tween>
                    <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                        <section className="panel green">
                            <div className="container bootstrap snippets bootdey">
                                        <div className="profile card2">
                                        <div className="profile-body">
                                            <div className="profile-bio">
                                            <div className="row">
                                                <div className="col-md-5 text-center">
                                                <img className="img-thumbnail md-margin-bottom-10" src="https://i.pinimg.com/736x/91/7d/6f/917d6fe868189926002ca0db7e80ccd4.jpg" alt="" />
                                                </div>
                                                <div className="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <h3>Contirbution</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
                                                <p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>
                                                </div>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                        </section>
                    </Tween>
                    <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
                        <section className="panel bordeaux">
                            <div className="container bootstrap snippets bootdey">
                                        <div className="profile card2">
                                        <div className="profile-body">
                                            <div className="profile-bio">
                                            <div className="row">
                                                <div className="col-md-5 text-center">
                                                <img className="img-thumbnail md-margin-bottom-10" src="https://i.pinimg.com/736x/91/7d/6f/917d6fe868189926002ca0db7e80ccd4.jpg" alt="" />
                                                </div>
                                                <div className="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <h3>Contirbution</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla.</p>
                                                <p>Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.</p>
                                                </div>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                        </section>
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
    </div>
);

// class SectionSlide extends React.Component {
//     render() {
//         return (
//             <div className="sectionwipes">
//                 <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
//                     <Scene pin>
//                         <div className="panel blue">
//                             <span>Panel</span>
//                         </div>
//                     </Scene>
//                     <Scene pin>
//                         <div className="panel turqoise">
//                             <span>Panel</span>
//                         </div>
//                     </Scene>
//                     <Scene pin>
//                         <div className="panel green">
//                             <span>Panel</span>
//                         </div>
//                     </Scene>
//                     <Scene pin>
//                         <div className="panel bordeaux">
//                             <span>Panel</span>
//                         </div>
//                     </Scene>
//                 </Controller>
//             </div>
//         );
//     }
// }

export default SectionSlide;

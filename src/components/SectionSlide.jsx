import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./SectionSlide.css";
import Logo from "../media/finlogo.png";
import BawaFace from "../media/bawaface.jpg"
import YashFace from "../media/yashface.jpg"
import PawanFace from "../media/pawanface.png"
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Image from 'react-bootstrap/Image'
// import  Grid  from "react-bootstrap/Grid";

const SectionSlide = () => (
	<div className="sectionwipes s-content">
		<Controller>
			<Scene triggerHook="onLeave" duration="300%" pin>
				<Timeline wrapper={<div id="pinContainer" />}>
					<section className="panel blue">
						<img
							className="Logo2"
							src={Logo}
							alt="potato internet, kya kare hum"
						/>
						<h1 className="bruh">Our Developers</h1>
					</section>
					<Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
						<section className="panel turqoise">
							<div className="container bootstrap snippets bootdey">
								<div className="profile card2">
									<div className="profile-body">
										<div className="profile-bio">
											<div className="row">
												<div className="col-md-5 text-center">
													<img
														className="img-thumbnail md-margin-bottom-10"
														src={BawaFace}
														alt=""
													/>
												</div>
												<div className="col-md-7">
													<h2>Aditya Bawa</h2>
													<h3>Contirbution</h3>
													<p>
														An enthusiastic individual currently pursuing
														Bachelors in Computer Science from VIVA Institute of
														Technology. I believe I am the kind of individual
														who has always been keen to work with people and
														develop myself. My interests lie in data analytics
														and finance, besides that, I have a keen interest
														regarding stock markets and the overall fintech
														ecosystem.
													</p>
													<p>
														The major aim for going forward with this project
														was to bring about financial awareness in all the
														people who are naive and unaware regarding the
														importance of personal finance and investments. Our
														website efficiently helps every individual learn and
														get their basics cleared regarding the finance
														environment. We have provided articles, an AI
														chatbot, and learning resources that will help you
														learn the basics of finance and investments. Happy
														Learning :)
													</p>
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
													<img
														className="img-thumbnail md-margin-bottom-10"
														src={YashFace}
														alt=""
													/>
												</div>
												<div className="col-md-7">
													<h2>Yash Pandhare</h2>
													<h3>Contirbution</h3>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Suspendisse eget massa nec turpis congue
														bibendum. Integer nulla felis, porta suscipit nulla
														et, dignissim commodo nunc. Morbi a semper nulla.
													</p>
													<p>
														Proin mauris odio, pharetra quis ligula non,
														vulputate vehicula quam. Nunc in libero vitae nunc
														ultricies tincidunt ut sed leo. Sed luctus dui ut
														congue consequat. Cras consequat nisl ante, nec
														malesuada velit pellentesque ac. Pellentesque nec
														arcu in ipsum iaculis convallis.
													</p>
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
													<img
														className="img-thumbnail md-margin-bottom-10"
														src={PawanFace}
														alt=""
													/>
												</div>
												<div className="col-md-7">
													<h2>Pawan Pujari</h2>
													<h3>Contirbution</h3>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Suspendisse eget massa nec turpis congue
														bibendum. Integer nulla felis, porta suscipit nulla
														et, dignissim commodo nunc. Morbi a semper nulla.
													</p>
													<p>
														Proin mauris odio, pharetra quis ligula non,
														vulputate vehicula quam. Nunc in libero vitae nunc
														ultricies tincidunt ut sed leo. Sed luctus dui ut
														congue consequat. Cras consequat nisl ante, nec
														malesuada velit pellentesque ac. Pellentesque nec
														arcu in ipsum iaculis convallis.
													</p>
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

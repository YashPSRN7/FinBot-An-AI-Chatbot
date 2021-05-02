import React from "react";
import "./Navbar.css";
import LightLogo from "../media/navbar-dark.png";
import DarkLogo from "../media/navbar-light.png";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-bg">
                <img
                    class="navbar-brand Logo"
                    src={LightLogo}
                    alt="potato internet, kya kare hum"
                />

                <nav className="nav-links">
                    <ul className="ml-auto">
                        <li>
                            <Link to={"/"} className="nav-link">
                                {" "}
                                Home{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/learn"} className="nav-link">
                                Learn
                            </Link>
                        </li>
                        <li>
                            <Link to={"/news"} className="nav-link">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} className="nav-link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"/down"} className="nav-link">
                                Down
                            </Link>
                        </li>

                        
                    </ul>
                </nav>
            </div>
        );
    }
}
export default withRouter(Navbar);

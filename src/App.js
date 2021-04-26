import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Down from "./Down";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Finbot</h2>
                    <nav className="">
                        <ul className="">
                            <li>
                                <Link to={"/"} className="nav-link">
                                    {" "}
                                    Home{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/news"} className="nav-link">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link to={"/down"} className="nav-link">
                                    Down
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/down" component={Down} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

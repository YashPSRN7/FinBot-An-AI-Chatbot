import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Down from "./components/Down";
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Insert Logo here */}

                    <Navbar> </Navbar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/down" component={Down} />
                        {/* <Route path="/about" component={About} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

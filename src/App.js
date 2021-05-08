import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Down from "./components/Down";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Learn from "./components/Learn.jsx";
// import { TextField, Button } from "@material-ui/core";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
        this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
        this.state = { response: "", query: "" };
    }

    componentDidMount() {
        // this.setState({ temp: tempVar });

        console.log("SPAMSPAMSPAMSPAMS");
        // console.log(tempVar);
        fetch("/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                query: "bruh",
            }),
        });
    }

    handleQuery(e) {
        e.preventDefault();

        // if (e.key === "Enter") {
        //     console.log(e.target.value);
        // }
        this.setState({ query: e.target.value });
    }

    handleQuerySubmit() {
        fetch("/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                query: this.state.query,
            }),
        });

        fetch("/time")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ response: data.response });
            });
    }

    // For widget
    handleNewUserMessage(q) {
        fetch("/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                query: q,
            }),
        });

        fetch("/time")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ response: data.response }, () => {
                    console.log(this.state.response);
                    addResponseMessage(this.state.response);
                });
            });
    }

    render() {
        return (
            <Router>
                <div>
                    {/* Insert Logo here */}

                    <Navbar> </Navbar>
                    {/* <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        onChange={this.handleQuery}
                        style={{
                            backgroundColor: "white",
                        }}
                        InputProps={{
                            style: {
                                color: "black",
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleQuerySubmit}
                    >
                        Ask
                    </Button>

                    <p style={{ color: "white" }}>
                        {" "}
                        FinBot Says : {this.state.response}{" "}
                    </p> */}

                    <Widget
                        title={"FinBot"}
                        subtitle={"For all your financial knowledge"}
                        handleNewUserMessage={this.handleNewUserMessage}
                    />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/down" component={Down} />
                        <Route path="/about" component={About} />
                        <Route path="/learn" component={Learn} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

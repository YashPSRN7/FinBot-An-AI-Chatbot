import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '/finbot/src/Home';
import News from '/finbot/src/News'
import Down from '/finbot/src/Down'

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Finbot</h2>
          <nav className="">
          <ul className="">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/News'} className="nav-link">News</Link></li>
            <li><Link to={'/Down'} className="nav-link">Down</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/' component={News}/>
              <Route exact path='/' component={Down}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
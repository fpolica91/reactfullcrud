import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import './App.css';
import Create from './components/create';
import Edit from './components/edit';
import Main from './components/main';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link to={'/'} className="navbar-brand">React Crud Example</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto" >
                {/* HOME */}
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                {/* CREATE */}
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                {/* INDEX */}
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>React Crud Tutorial</h2>

          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


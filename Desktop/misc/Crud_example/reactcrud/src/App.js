import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"

import './App.css';
import axios from "axios"
import Create from './components/create';
import Edit from './components/edit';
import Main from './components/main';


// APP HANDLES ROUTING 

class App extends Component {
  state = {
    business: []

  }

  componentDidMount() {
    axios.get('http://localhost:3001/business')
      .then(response => {
        this.setState({ business: response.data })
      })
      .catch(err => console.log(err))
  }

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
            <Route
              path="/edit/:id"
              render={(props) => <Edit
                business={this.state.business}
                handleOnchage={this.handleOnchage}
                handleSubmit={this.handleSubmit}
                {...props} />}
            />
            <Route
              path="/index" render={(props) =>
                <Main business={this.state.business} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


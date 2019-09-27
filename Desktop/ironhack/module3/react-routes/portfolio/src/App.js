import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import { projects as Projects } from './components/Projects';
import ProjectDetails from './components/projectDetails';






class App extends Component {
  state = {}
  render() {
    return (
      <div>

        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
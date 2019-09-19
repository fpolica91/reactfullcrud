import React, { Component } from 'react';
import './App.css';
import { store } from "./store/indexx"
import { ReactDOM } from 'react-dom';
import Main from './components/main';


class App extends Component {
  state = {
    defaultState: []
  }

  componentDidMount() {
    const defaultState = store.getState()
    this.setState({
      defaultState: defaultState
    })
  }


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { ConnectedDashboard } from './dashboard';
import { Provider } from "react-redux";
import { store } from '../store/indexx';
import { Router, Route } from 'react-router-dom';
import { history } from "../store/history"
import { Cnavigation } from './navigation';





class Main extends Component {

    render() {
        return (
            <Router history={history}>
                <Provider store={store}>
                    <Cnavigation />
                    <Route
                        exact path="/dashboard"
                        render={() => (<ConnectedDashboard />)}
                    />

                </Provider>
            </Router>
        );
    }
}

export default Main;

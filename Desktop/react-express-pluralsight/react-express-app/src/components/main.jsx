import React, { Component } from 'react';
import { ConnectedDashboard } from './dashboard';
import { Provider } from "react-redux";
import { store } from '../store/indexx';




class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedDashboard />
            </Provider>
        );
    }
}

export default Main;

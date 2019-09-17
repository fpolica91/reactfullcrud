import React, { Component } from 'react';
import Images from './images';
import logo from "../images/images/react-logo.svg";
import Text from './text';
import icon1 from "../images/images/icon1.png"
import icon2 from "../images/images/icon2.png"
import icon3 from "../images/images/icon3.png"




class Main extends Component {
    state = {
        images: [
            logo,
        ],
        icons: [
            { icon: icon1, id: 1 },
            { icon: icon2, id: 2 },
            { icon: icon3, id: 3 }
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <Text />
                <Images
                    imageVal={this.state.images}
                    icons={this.state.icons}
                />

            </div>
        );
    }
}

export default Main;
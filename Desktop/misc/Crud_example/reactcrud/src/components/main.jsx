import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Main extends Component {

    renderBusiness = () => {
        return this.props.business.map((bizz, ) => {
            return (

                <tr>
                    <td key={bizz._id}> {bizz.name} </td>
                    <td> {bizz.business} </td>
                    <td>{bizz.number}</td>
                    <Link to={"/edit/" + bizz._id} className="btn btn-primary">Edit</Link>
                    <td><button>Delete</button></td>
                </tr>
            )
        })
    }

    render() {



        return (
            <div>
                <table border="1">
                    {this.renderBusiness()}
                </table>

            </div>
        );
    }
}

export default Main;
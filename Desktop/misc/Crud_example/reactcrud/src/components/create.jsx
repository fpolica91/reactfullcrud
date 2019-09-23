import React, { Component } from 'react';
import axios from "axios";

export default class Create extends Component {

    state = {
        name: "",
        business: "",
        number: ""
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="business"
                            value={this.state.business}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="number"
                            className="form-control"
                            onChange={this.handleChange}
                            name="number"
                            value={this.state.number}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const bizz = {
            name: this.state.name,
            business: this.state.business,
            number: this.state.number
        }
        axios.post("http://localhost:3001/add", bizz)
            .then(res => console.log(res.data))

        this.setState({
            name: "",
            business: "",
            number: ""
        })
    }
}
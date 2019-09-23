import React, { Component } from 'react';
import axios from "axios"
class Edit extends Component {

    state = {
        name: "",
        business: "",
        number: ""
    }

    render() {

        const id = this.props.match.params.id

        const business = this.props.business.find(buss => buss._id === id)

        return (
            <div>
                {business &&
                    <form onSubmit={e => this.handleSubmit(e)} >
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={e => this.handleEdit(e)}
                            placeholder={business.name}
                        />
                        <input
                            name="business"
                            type="text"
                            value={this.state.business}
                            onChange={e => this.handleEdit(e)}
                            placeholder={business.business}
                        />
                        <input
                            name="number"
                            type="number"
                            value={this.state.number}
                            onChange={e => this.handleEdit(e)}

                            placeholder={business.number}
                        />
                        <button>Submit</button>
                    </form>
                }
            </div>
        );
    }
    handleEdit = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let updatedBusiness = {
            name: this.state.name,
            business: this.state.business,
            number: this.state.number
        }
        console.log(updatedBusiness)
        axios.post('http://localhost:3001/update/' + this.props.match.params.id, updatedBusiness)
            .then(movie => console.log(movie))
            .catch(err => console.log(err))
    }
}

export default Edit;
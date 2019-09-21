import React, { Component } from 'react';


class AnimalList extends Component {

    showAnimals = () => {
        return this.props.animals.map((animal, index) => {
            { console.log(this.props.animals) }
            return (

                <div key={index} style={{
                    border: "1px solid black",
                    margin: "10px",
                    padding: "px"
                }} >
                    <h5>{animal.name}</h5>
                    <p>Weight: {animal.weight}</p>
                    <button onClick={() => this.props.deleteItem(index)} >
                        Delete
                    </button>
                </div>
            )
        })
    }






    render() {
        return (
            <React.Fragment>
                {/* Animal List */}
                <div>
                    {this.showAnimals()}
                    <button onClick={this.props.sortByWeight} >
                        Sort By Weight
                    </button>
                </div>
                {/* Animal List */}

                {/* form */}
                <form onSubmit={this.props.onAdd}>

                    {/* ANIMAL NAME */}
                    <label> Name</label>
                    <input type="text"
                        value={this.props.newName}
                        onChange={(e) => this.props.onChange(e)}
                        name="newName"
                    />

                    {/* ANIMAL WEIGHT */}
                    <label>Weight</label>
                    <input
                        type="number"
                        value={this.props.newWeight}
                        onChange={(e) => this.props.onChange(e)}
                        name="newWeight"
                    />

                    <button>Submit</button>

                </form>
                {/* form */}

            </React.Fragment>

        );
    }
}

export default AnimalList;
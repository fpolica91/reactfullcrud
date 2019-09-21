import React, { Component } from 'react';
import './App.css';
import AnimalList from './components/AnimalList';
import animals from "./animals.json"


class App extends Component {
  state = {
    list: [],
    newName: "",
    newWeight: ""
  }

  addAnimal = (e) => {
    e.preventDefault()
    let list = [...this.state.list]
    let animal = { name: this.state.newName, weight: this.state.newWeight }
    list.push(animal)
    this.setState({
      list: list,
      newName: "",
      newWeight: ""
    })
  }

  handleDelete = (id) => {
    let animals = [...this.state.list]
    animals.splice(id, 1)
    this.setState({
      list: animals
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  sortByWeight = () => {
    const animals = [... this.state.list]
    animals.sort((a, b) => {
      if (a.weight > b.weight) {
        return -1
      } else {
        return 1
      }

      return 0

    })

    this.setState({
      list: animals
    })

  }



  componentDidMount() {
    this.setState({
      list: animals
    })
  }

  render() {
    return (
      <div>
        <AnimalList

          animals={this.state.list}
          onAdd={this.addAnimal}
          deleteItem={this.handleDelete}
          sortByWeight={this.sortByWeight}
          newName={this.state.newName}
          newWeight={this.state.newWeight}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;




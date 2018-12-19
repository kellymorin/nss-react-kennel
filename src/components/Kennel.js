import React, {Component} from 'react'
import EmployeeList from "./Employee/EmployeeList"
import LocationList from './Location/LocationList';
import AnimalList from './Animal/AnimalList'
import "./Kennel.css"

export default class Kennel extends Component {
  employeesFromAPI = [
    {id: 1, name: "Jessica Younker"},
    {id: 2, name: "Jordan Nelson"},
    {id: 3, name: "Zoe LeBlanc"},
    {id: 4, name: "Blaise Roberts"}
  ]

  locationsFromAPI = [
    {id: 1, name: "Nashville North", address: "500 Circle Way"},
    {id: 2, name: "Nashville South", address: "10101 Binary Court"}
  ]

  animalsFromAPI =[
    {id: 1, breed: "King Charles Cavalier", name: "Maci"},
    {id: 2, breed: "Poodle", name: "Charles"},
    {id: 3, breed: "Yorkshire Terrier", name: "Snickers" },
    {id: 4, breed: "Kitten", name: "Snowball"},
    {id: 5, breed: "Fish", name: "Goldy" }
  ]

  state={
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations}/>
        <EmployeeList employees={this.state.employees}/>
        <AnimalList animals={this.state.animals} />
      </article>
    );
  }
}
import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList';

export default class ApplicationViews extends Component{
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

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
  ]

  animalsOwnersFromAPI = [
    {id: 1, animalId: 1, ownerId: 1},
    {id: 2, animalId: 1, ownerId: 2},
    {id: 3, animalId: 2, ownerId: 3},
    {id: 4, animalId: 3, ownerId: 4},
    {id: 5, animalId: 4, ownerId: 5},
    {id: 6, animalId: 5, ownerId: 6}
  ]

  state={
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI,
    animalsOwners: this.animalsOwnersFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props)=>{
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props)=>{
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwners={this.state.animalsOwners} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props)=>{
          return <OwnerList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}
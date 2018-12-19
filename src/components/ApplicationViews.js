import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList';

export default class ApplicationViews extends Component{
  state={
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalsOwners: [],
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
        .then(r => r.json())
        .then(animals => newState.animals = animals)
        .then(() =>fetch("http://localhost:5002/employees").then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:5002/owners").then(r => r.json()))
        .then(owners => newState.owners = owners)
        .then(() => fetch("http://localhost:5002/animalsOwners").then(r => r.json()))
        .then(animalsOwners => newState.animalsOwners = animalsOwners)
        .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(()=> fetch(`http://localhost:5002/animals`))
    .then(e => e.json())
    .then(animals => this.setState({
      animals: animals
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props)=>{
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props)=>{
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwners={this.state.animalsOwners} deleteAnimal={this.deleteAnimal}/>
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
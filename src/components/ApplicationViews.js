import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'

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

    AnimalManager.getAll().then(animals => newState.animals = animals)
      .then(EmployeeManager.getAll().then(employees => newState.employees = employees))
      .then(LocationManager.getAll().then(locations => newState.locations = locations))
      .then(OwnerManager.getAll().then(owners => newState.owners = owners))
      .then(() => fetch("http://localhost:5002/animalsOwners").then(r => r.json()))
      .then(animalsOwners => newState.animalsOwners = animalsOwners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = (id) => {
    AnimalManager.delete(id).then(animals => this.setState({
      animals: animals
    }))
  }

  deleteEmployees = (id) => {
    EmployeeManager.delete(id).then(employees => this.setState({
      employees: employees
    }))
  }

  deleteOwners = (id) => {
    OwnerManager.delete(id).then(owners => this.setState({
      owners: owners
    }))
    .then(() => AnimalManager.getAll()).then(animals => this.setState({
      animals: animals
    }))
    .then(()=> fetch("http://localhost:5002/animalsOwners"))
    .then(e => e.json())
    .then(animalsOwners => this.setState({
      animalsOwners: animalsOwners
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
          return <EmployeeList employees={this.state.employees} deleteEmployees={this.deleteEmployees}/>
        }} />
        <Route path="/owners" render={(props)=>{
          return <OwnerList owners={this.state.owners} deleteOwners={this.deleteOwners}/>
        }} />
      </React.Fragment>
    )
  }
}
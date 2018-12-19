import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AnimalList from './Animal/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'
import AnimalDetail from './Animal/AnimalDetail'
import OwnerDetail from './Owner/OwnerDetail'
import EmployeeDetail from './Employee/EmployeeDetail'
import LocationDetail from './Location/LocationDetail'
import Login from './Authentication/Login'

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

    AnimalManager.getAnimals().then(animals => newState.animals = animals)
      .then(()=> EmployeeManager.getEmployees().then(employees => newState.employees = employees))
      .then(() => LocationManager.getLocations().then(locations => newState.locations = locations))
      .then(() => OwnerManager.getOwners().then(owners => newState.owners = owners))
      .then(() => fetch("http://localhost:5002/animalsOwners").then(r => r.json()))
      .then(animalsOwners => newState.animalsOwners = animalsOwners)
      .then(() => this.setState(newState))
  }

  isAuthenticated = () => {if(localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null){ return true } else{ return false }}



  deleteAnimal = (id) => {
    AnimalManager.delete(id, "animals").then(animals => this.setState({
      animals: animals
    }))
  }

  deleteEmployees = (id) => {
    EmployeeManager.delete(id, "employees").then(employees => this.setState({
      employees: employees
    }))
  }

  deleteOwners = (id) => {
    const newState = {}
    OwnerManager.deleteOwner(id).then(owners => newState.owners = owners)
    .then(() => AnimalManager.getAll("animals")).then(animals => newState.animals = animals)
    .then(()=> fetch("http://localhost:5002/animalsOwners"))
    .then(e => e.json())
    .then(animalsOwners => newState.animalsOwners = animalsOwners)
    .then(() => this.setState(newState))

  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props)=>{
          if(this.isAuthenticated()){
            return <LocationList locations={this.state.locations} />
          } else{
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" render={(props) => {
          return <Login {...props} />
        }}/>
        <Route exact path="/animals" render={(props)=>{
          if(this.isAuthenticated()){
            return <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwners={this.state.animalsOwners} deleteAnimal={this.deleteAnimal}/>
          } else{
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if(this.isAuthenticated()){
            return <EmployeeList employees={this.state.employees} deleteEmployees={this.deleteEmployees}/>
          } else{
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/owners" render={(props)=>{
          if(this.isAuthenticated()){
            return <OwnerList owners={this.state.owners} deleteOwners={this.deleteOwners}/>
          } else{
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimals={this.deleteAnimals} animals={this.state.animals} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props)=> {
          return <OwnerDetail {...props} owners={this.state.owners} deleteOwners={this.deleteOwners} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props)=> {
          return <EmployeeDetail {...props} employees={this.state.employees}deleteEmployees={this.deleteEmployees} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props)=> {
          return <LocationDetail {...props} locations={this.state.locations} />
        }} />
      </React.Fragment>
    )
  }
}
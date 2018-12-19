import React, {Component} from 'react'
import EmployeeList from "./Employee/EmployeeList"

export default class Kennel extends Component {
  render() {
    return (
      <div>
        <h3>Student Kennels</h3>
        <h4>Nashville North Location</h4>
        <h5>500 Puppy Way</h5>
        <EmployeeList />
      </div>
    );
  }
}